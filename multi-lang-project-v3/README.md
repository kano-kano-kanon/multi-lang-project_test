# Multi-Language Project v3 (Rust WASM + Python + JS + Chart.js)

このプロジェクトは、Rust(WASM)・Python(Flask)・JavaScriptを連携させた
「数値計算とデータ可視化ツール」です。

## 機能
- **Rust (WASM)**: 高速な計算（加算・掛算・フィボナッチ）
- **Python (Flask)**: データ分析API（合計・平均・最大・最小）
- **JavaScript (Frontend)**: WASMの結果とAPIの結果をChart.jsでグラフ表示

## セットアップ
```bash
cd scripts
chmod +x install.sh run_pipeline.sh
./install.sh
./run_pipeline.sh
```
