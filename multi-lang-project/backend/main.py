from ctypes import CDLL
import flask
import os

lib = CDLL(os.path.join(os.path.dirname(__file__), "../engine/target/release/libfastmath.so"))

app = flask.Flask(__name__)

@app.route("/add/<int:a>/<int:b>")
def add_numbers(a, b):
    result = lib.add(a, b)
    return {"result": result}

if __name__ == "__main__":
    app.run(port=5000)
