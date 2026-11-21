import json
import os

from flask import Flask, Response

app = Flask(__name__)

# Find dictionary.json next to this file, so it works from any folder
DICT_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "dictionary.json")


def load_dictionary():
    with open(DICT_FILE, encoding="utf-8") as file:
        return json.load(file)


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


# Optional: list all English words
@app.route("/words")
def words():
    return json_response(list(load_dictionary().keys()))


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, debug=True)