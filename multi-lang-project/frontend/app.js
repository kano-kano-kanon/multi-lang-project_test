async function addNumbers() {
    const a = document.getElementById("numA").value;
    const b = document.getElementById("numB").value;
    const res = await fetch(`http://localhost:5000/add/${a}/${b}`);
    const data = await res.json();
    document.getElementById("result").innerText = `Result: ${data.result}`;
}
