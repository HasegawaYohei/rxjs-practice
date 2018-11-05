import { from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

console.log('06.js - Promise');

from(fetch('https://mstdn.jp/api/v1/timelines/public?local=something'))
  .pipe(
    mergeMap( (res) => res.json()),// res.json()もPromiseオブジェクトを返すが、from(res.json())とする必要はない
    mergeMap( (items) => from(items)),
    map( (item) => item.content),
  )
  .subscribe( (v) => console.log(v));

//これは下記のコードと同じように出力される
/*
fetch('https://mstdn.jp/api/v1/timelines/public?local=something')
  .then((res) => res.json())
  .then( (items) => {
    items.forEach( (item) => {
      console.log(item.content);
    })
  });

// async/await使うとこうなる(babelでトランスパイルしてないので古いブラウザでは動きません)
// こっちのほうがきれい...

(async () => {
  const res = await fetch('https://mstdn.jp/api/v1/timelines/public?local=something');
  const items = await res.json();
  items.forEach( (item) => {
    console.log(item.content);
  });
})();

*/