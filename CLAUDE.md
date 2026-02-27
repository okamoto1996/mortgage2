# このプロジェクトのルール

## sw.js のバージョン管理

`index.html` や `manifest.json` など、キャッシュ対象ファイルを変更したときは、
必ず `sw.js` の `CACHE_NAME` のバージョン番号を1つ上げること。

例: `mortgage-app-v14` → `mortgage-app-v15`

これをしないと、ユーザーのブラウザが古いキャッシュを使い続けて変更が反映されない。
