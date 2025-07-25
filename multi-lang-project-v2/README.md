# Multi-Language Project v2 (Rust WASM + Python + JS + Bash)

これは、Ver.2のマルチ言語サンプルです。

- **Rust (WASM)**: フロントエンドで使用
- **Python (Flask)**: データ分析API
- **JavaScript (Frontend)**: Rust(WASM)とPython APIにアクセス
- **Bash**: WASMビルド + API起動 + フロント表示

## セットアップ
```bash
# Rust用
cd engine
wasm-pack build --target web

# Python用
cd ../backend
pip install flask

# 実行
../scripts/run_pipeline.sh
```
