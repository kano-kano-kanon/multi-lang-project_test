import init, { add } from '../engine/pkg/fastmath_wasm.js';

window.addEventListener("DOMContentLoaded", async () => {
    await init();

    document.getElementById("addBtn").addEventListener("click", () => {
        const a = parseInt(document.getElementById("numA").value);
        const b = parseInt(document.getElementById("numB").value);
        const result = add(a, b);
        document.getElementById("wasmResult").innerText = `Rust WASM Add: ${result}`;
    });

    document.getElementById("analyzeBtn").addEventListener("click", async () => {
        const data = document.getElementById("dataInput").value.split(",").map(Number);
        const res = await fetch("http://localhost:5000/analyze", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ numbers: data })
        });
        const json = await res.json();
        document.getElementById("apiResult").innerText = `Sum: ${json.sum}, Average: ${json.average}`;
    });
});
