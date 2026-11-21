import json
import os

from flask import Flask, Response, request

app = Flask(__name__)

# Find dictionary.json next to this file, so it works from any folder
DICT_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "dictionary.json")


def load_dictionary():
    with open(DICT_FILE, encoding="utf-8") as file:
        return json.load(file)


def save_dictionary(dictionary):
    with open(DICT_FILE, "w", encoding="utf-8") as file:
        json.dump(dictionary, file, ensure_ascii=False, indent=2)


def json_response(data, status=200):
    return Response(
        response=json.dumps(data, ensure_ascii=False),
        status=status,
        mimetype="application/json",
    )


@app.route("/translate/<word>")
def translate(word):
    dictionary = load_dictionary()
    key = word.lower()
    for english, finnish in dictionary.items():
        if english.lower() == key:
            return json_response({"English": word, "Finnish": finnish})
    return json_response({"error": "Word not found"}, 404)


@app.route("/words")
def words():
    return json_response(list(load_dictionary().keys()))
@app.route("/add")
def add():
    en = request.args.get("en", "").strip().lower()
    fi = request.args.get("fi", "").strip().lower()
    if not en or not fi:
        return json_response({"error": "Parameters 'en' and 'fi' are required"}, 400)

    dictionary = load_dictionary()
    dictionary[en] = fi
    save_dictionary(dictionary)
    return json_response({"message": "Word added", "English": en, "Finnish": fi})


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, debug=True)