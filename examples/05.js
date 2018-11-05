import { from, of, range } from 'rxjs';
import { map, tap, filter, take, pluck, takeWhile, scan, toArray, mergeMap, mapTo, switchMap } from 'rxjs/operators';

console.log('05.js - pipeとoperator');

of(1,3,5,7,9,11,13,15,17)
  .pipe(
    map( (n) => n+1),// 写像
    tap( (n) => console.log('tap1: ',n)),//tap は副作用(side effect)を発生させる。決して主作用を起こしてはいけない(ログなどのみに使う)
    filter( (n) => n % 3 == 0),
    tap( (n) => console.log('tap2: ',n)),
    take(2)
  )
  .subscribe( (v) => console.log(v) );

console.log('-------------------------');

const people = [
  { name: 'ぱんだ', age: 28 },
  { name: 'おばけ', age: 25 },
  { name: '日向夏', age: 20 },
  { name: '黒ネコ', age: 27 },
  { name: 'メガネ', age: 18 },
  { name: '宇宙人', age: 26 }
]

from(people)
  .pipe(
    pluck('age'),
    takeWhile((age) => age >= 20),
    scan( (acc, one) => acc + one, 0),// js の Array.reduce( ... )に似ているが途中経過の値も流される
    toArray()
  )
  .subscribe( (v) => console.log(v));

console.log('--------------------------');

//新しいObservableを生成している
range(1,5)
  .pipe(
    mergeMap( (n) => range(1,n).pipe(mapTo(n))), // mapTo(n) は map ( (x) => n) と同じ(xは任意)
    toArray()
  )
  .subscribe( (v) => console.log(v));

/*

operatorは他にもいろいろあります
参照:(https://rxjs-dev.firebaseapp.com/api)

*/