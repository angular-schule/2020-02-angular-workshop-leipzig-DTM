import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating';
  d = new Date();


  constructor() {

    function producer(o) {
      o.next(3);
      o.next(4);
      o.next(5);
      setTimeout(() => o.next(6), 2000);
      setTimeout(() => o.complete(), 3000);
    }

    const observer = {
      next: e => console.log(e),
      error: e => console.error(e),
      complete: () => console.log('Leipzig')
    }

    const myObs$ = new Observable(producer);

    myObs$.subscribe(observer);

  }
}
