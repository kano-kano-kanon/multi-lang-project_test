from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json.get("numbers", [])
    if not data:
        return jsonify({"error": "No data provided"}), 400
    total = sum(data)
    avg = total / len(data)
    return jsonify({"sum": total, "average": avg})

if __name__ == "__main__":
    app.run(port=5000)
