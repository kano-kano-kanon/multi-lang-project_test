#!/bin/bash
set -e

echo "=== Building Rust Library ==="
cd "$(dirname "$0")/../engine"
cargo build --release

echo "=== Starting Python API ==="
cd ../backend
python3 main.py &
PID=$!

sleep 2
echo "=== Opening Frontend ==="
xdg-open ../frontend/index.html || open ../frontend/index.html

wait $PID
