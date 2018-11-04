import { Observable } from 'rxjs';

console.log('02.js - Observer');

const stream = Observable.create( (observer) => {
  console.log('start subscribing');
  observer.next(100);
  observer.error('これはどこで受け取っているか');
  observer.complete();
})


console.log('subscribe 1回目');
stream.subscribe((v) => console.log('ObserverA',v))

console.log('subscribe 2回目');
stream.subscribe(
  (v) => console.log('ObserverB-1',v),
  (v) => console.log('ObserverB-2',v)
)



/*

1.subscribeは何回でも出来る
2.Observerの書き方は色々ある

----詳細----

subscribeするたびにObservableが複製され値が流れているのが、以下を実行すればわかる
もしObservableが共有されているならば、3回目(ObserverC)のsubscribeを始める前に値は流れ終わっているはずである
このように振る舞うObservableをCold Observable という(もしくはCOLDな性質を持つ、など)

setTimeout( () => {
  console.log('subscribe 3回目');
  stream.subscribe(
    (v) => console.log('ObserverC-1',v),
    (v) => console.log('ObserverC-2',v),
    ()  => console.log('ObserverC-3')
  )
},1000)


*/