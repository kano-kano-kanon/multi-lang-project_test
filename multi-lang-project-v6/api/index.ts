import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => res.json({ status: "ok" }));

app.get("/add/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  res.json({ result: a + b });
});

app.post("/analyze", async (req, res) => {
  const response = await fetch("http://python_api:8000/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body),
  });
  const data = await response.json();
  res.json(data);
});

app.listen(3001, () => console.log("Express API running on port 3001"));
