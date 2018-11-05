import { Observable } from 'rxjs';

console.log('03.js - Subscription');

const observable = Observable.create( (observer) => {
  console.log('start subscribing');
  observer.next(0);
  const intervalID = setInterval(() => {
    observer.next('+1000ms経過');
  },1000);
})

const subscription = observable.subscribe((v) => console.log(v));


setTimeout( () => {
  console.log('3000ms経過');
  subscription.unsubscribe();//subscribeをやめる
},3000);


/*
//追加することも出来る

const subscription2 = observable.subscribe((v) => console.log('subscription2',v));
subscription.add(subscription2);

*/