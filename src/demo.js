import { fromEvent, of, from } from 'rxjs';
import { map, mergeMap,  switchMap, pluck, filter, reduce } from 'rxjs/operators';

const searchElement = document.querySelector('input#search');
const outputElement = document.querySelector('ul.result');

fromEvent(document,'keydown')
  .pipe(
    mergeMap( () => of(searchElement.value)),
    filter( (value) => value),
    switchMap( (value) => fetch(`https://api.github.com/search/repositories?q=${value}&sort=stars&order=desc`)),
    mergeMap( (res) => res.json()),
    pluck('items'),
    filter((items) => items),
    mergeMap( (items) => 
      from(items)
        .pipe(
          map( (item) => [item.full_name,item.description,item.html_url]),
          map( ([name,desc,url]) => `<li class="col-12"><a href="${url}">${name}: ${desc}</a></li>`),
          reduce( (acc, one) => acc + one,""),
        )
    ),
  )
  .subscribe( (txt) => {
    outputElement.textContent = '';
    outputElement.insertAdjacentHTML('beforeend',txt);
  })