import { interval, from } from 'rxjs';
import { mergeMap, take, map, distinctUntilChanged } from 'rxjs/operators';

console.log('06.js - Promise');

from(fetch('https://mstdn.jp/api/v1/timelines/public?local=something'))
  .pipe(
    mergeMap( (res) => res.json()),// res.json()もPromiseオブジェクトを返すが、from(res.json())とする必要はない
    mergeMap( (items) => from(items)),
    map( (item) => item.content),
  )
  .subscribe( (v) => console.log(v))

//これは下記のコードと同じように出力される
/*
fetch('https://mstdn.jp/api/v1/timelines/public?local=something')
  .then((res) => res.json())
  .then( (items) => {
    items.map( (item) => {
      console.log(item.content);
    })
  });
*/