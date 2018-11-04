import { from, fromEvent, interval } from 'rxjs';

console.log('04.js - すべてをObservableにする');

const observable1 = from([1,3,5,7,9]);
observable1.subscribe( (v) => console.log('observable1:',v));



const observable2 = fromEvent(window,'load');
observable2.subscribe( (v) => console.log('observable2: DOMが構築されました'));



const observable3 = interval(1000);
observable3.subscribe( (v) => console.log('observable3:',v));

/*

PromiseオブジェクトもObservableにできます(強力だと思います...)
詳細は06.js。


*/