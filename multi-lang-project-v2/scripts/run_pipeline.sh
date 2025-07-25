#!/bin/bash
set -e

echo "=== Building Rust WASM ==="
cd "$(dirname "$0")/../engine"
wasm-pack build --target web

echo "=== Starting Python API ==="
cd ../backend
python3 main.py &
PID=$!

sleep 2
echo "=== Opening Frontend ==="
xdg-open ../frontend/index.html || open ../frontend/index.html

wait $PID
