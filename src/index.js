import { fromEvent, of } from 'rxjs';
import { map, mergeMap, startWith, tap } from 'rxjs/operators';

const searchElement = document.querySelector('input#search');
const outputElement = document.querySelector('ul.result');

// 以下を編集して下さい
/*

やること:
1. キーボートが押されたら(もしくは検索ボックスの値が変わった時)
2. 検索ボックスの値を任意のAPIで検索し(demo.jsではgithubのリポジトリを検索しています)
3. 表示する

npm run pr
localhost:8000/index.htmlを開く
index.html index.js style.scssを編集してください(保存したら手動でブラウザをリロードしてください)
*/
