import { Observable } from 'rxjs';

console.log('01.js - Observable');

const observable = Observable.create( (observer) => {
  console.log('start subscribing');
  observer.next(100);
  observer.next('どんな値(配列や関数などのオブジェクトやStringやNumberなどのプリミティブデータ型まで)でもいいです');
  observer.complete();
  observer.error('complete,error実行後のログを確認してください');
  observer.next({hello: 'RxJS!!!'});
})

const observer = {
  next    : (value) => console.log('next:', value),
  error   : (err)   => console.error('error:',  err),
  complete: ()      => console.log('complited!')
}

observable.subscribe(observer);

/*
N=01 npm run ex
localhost:8000/example.htmlを開く
01.jsを編集してください(保存したら手動でブラウザをリロードしてください)
02.js以降も同様
*/

/*

9-11行目の順番をかえたりなどしてログの変化を見て下さい
complete,errorがObserverに送られるとsubscribeが終了します

*/