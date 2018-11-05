import { Subject } from 'rxjs';

console.log('08.js - Subject');

const subject = new Subject();

subject.subscribe( (v) => console.log('ObserverA:',v));

subject.next(1);

subject.subscribe( (v) => console.log('ObserverB:',v));

subject.next(2);

/*

・SubjectはObservableでありObserverであると言われます
・Connectable Observableと同じくmulticastできます

厳密にはもちろん違いますが以下のSubjectLikeの「ような」振る舞いをします

class SubjectLike {
  constructor() {
    this.observers = [];
  }
  subscribe(observer){
    this.observers.push(observer);
  }
  next(value) {
    this.observers.forEach( (observer) => {
      observer(value);
    })
  }
}

const subjectLike = new SubjectLike();

subjectLike.subscribe( (v) => console.log('ObserverC:',v) );

subjectLike.next(3);

subjectLike.subscribe( (v) => console.log('ObserverD:',v) );

subjectLike.next(4);

*/