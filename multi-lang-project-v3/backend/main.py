from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json.get("numbers", [])
    if not data:
        return jsonify({"error": "No data provided"}), 400
    total = sum(data)
    avg = total / len(data)
    max_val = max(data)
    min_val = min(data)
    return jsonify({"sum": total, "average": avg, "max": max_val, "min": min_val})

if __name__ == "__main__":
    app.run(port=5000)
