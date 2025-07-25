# Multi-Language Project (Rust + Python + JavaScript + Bash)

これは、複数言語が連携するサンプルプロジェクトです。

- **Rust**: 高速処理ライブラリ
- **Python (Flask)**: Rustを呼び出してAPI化
- **JavaScript (Frontend)**: APIと通信して結果を表示
- **Bash**: 全体のビルド＆起動スクリプト

## セットアップ
```bash
cd engine
cargo build --release
cd ../backend
pip install flask
../scripts/run_pipeline.sh
```

## 実行
- Python API: `http://localhost:5000`
- フロントエンド: 自動でブラウザが開きます
