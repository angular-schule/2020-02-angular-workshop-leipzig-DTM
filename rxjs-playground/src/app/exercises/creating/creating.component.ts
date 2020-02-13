import { Component, OnInit } from '@angular/core';
import { Observable, of, from, timer, interval, Subject, ReplaySubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent implements OnInit {

  logStream$ = new ReplaySubject<number | string>();

  ngOnInit() {
    /**
     * Erstelle ein Observable und abonniere den Datenstrom.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

     const myObs$ = new Observable(obs => {
       obs.next(1);
       obs.next(2);
       setTimeout(() => obs.next(3), 2000);
       setTimeout(() => obs.complete(), 3000);
     });

     const myObs2$ = of(1,2,3,4,5);
     const myObs3$ = from([5,6,7,8,9]);

     const timer$ = timer(0, 1000);



     timer$.pipe(
       map(e => e * 3),
       filter(e => e % 2 === 0)
     ).subscribe(
       e => this.log(e),
       err => this.log(err),
       () => this.log('Complete')
     );


     /*****************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
