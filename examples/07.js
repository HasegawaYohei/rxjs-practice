import { interval } from 'rxjs';
import { publish, refCount } from 'rxjs/operators';

console.log('07.js - Connectable Observable');

const observable = 
  interval(1000)
    .pipe(
      publish(),
      //refCount()
    );

observable.subscribe( (v) => console.log(v));

setTimeout( () => {
  observable.connect();
  //observable.subscribe( (v) => console.log(v * 2));
},10000);

setTimeout( () => {
  observable.subscribe( (v) => console.log(v * 2));
},20000);

/*

publish()は Cold ObservableをConnectable Observableに変換する
これにとってmulticast(同一のObservableを複数のobserverでsubscribe)出来ます
つまりHotな性質をもつことになります
connect()を実行すると値を流し始める
connect()を実行せず、Observableが作成された時から値を流すにはrefCount()

*/

