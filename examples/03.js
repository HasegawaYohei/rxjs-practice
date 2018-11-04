import { Observable } from 'rxjs';

console.log('03.js - Subscription');

const observable = Observable.create( (observer) => {
  console.log('start subscribing');
  observer.next(0);
  const intervalID = setInterval(() => {
    observer.next('+1000ms経過')
  },1000)
})

const subscription = observable.subscribe((v) => console.log(v))


setTimeout( () => {
  console.log('3000ms経過');
  subscription.unsubscribe();//subscribeをやめる
},3000);

