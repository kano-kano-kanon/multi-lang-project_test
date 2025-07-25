import init, { add, fibonacci } from '../engine/pkg/fastmath_wasm.js';

let chart;

window.addEventListener("DOMContentLoaded", async () => {
    await init();

    document.getElementById("addBtn").addEventListener("click", () => {
        const a = parseInt(document.getElementById("numA").value);
        const b = parseInt(document.getElementById("numB").value);
        const result = add(a, b);
        document.getElementById("wasmResult").innerText = `Rust WASM Add: ${result}`;
    });

    document.getElementById("fibBtn").addEventListener("click", () => {
        const n = parseInt(document.getElementById("numA").value);
        const result = fibonacci(n);
        document.getElementById("wasmResult").innerText = `Fib(${n}) = ${result}`;
    });

    document.getElementById("analyzeBtn").addEventListener("click", async () => {
        const data = document.getElementById("dataInput").value.split(",").map(Number);
        const res = await fetch("http://localhost:5000/analyze", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ numbers: data })
        });
        const json = await res.json();
        renderChart(data);
        document.getElementById("wasmResult").innerText = 
            `Sum: ${json.sum}, Avg: ${json.average}, Max: ${json.max}, Min: ${json.min}`;
    });
});

function renderChart(data) {
    const ctx = document.getElementById("dataChart").getContext("2d");
    if (chart) chart.destroy();
    chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: data.map((_, i) => `#${i + 1}`),
            datasets: [{
                label: "Data",
                data: data,
                backgroundColor: "rgba(75, 192, 192, 0.5)"
            }]
        }
    });
}
