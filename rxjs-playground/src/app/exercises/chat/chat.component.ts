import { Component, OnInit } from '@angular/core';
import { Subject, merge, concat, race, forkJoin, ReplaySubject, zip, combineLatest, timer, interval, of } from 'rxjs';
import { map, timeInterval } from 'rxjs/operators';

@Component({
  selector: 'rxw-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {

  msg = {
    julia$: new Subject<string>(),
    georg$: new Subject<string>(),
    john$: new Subject<string>()
  };

  logStream$ = new Subject<string>();

  ngOnInit() {

    /******************************/
    /**
     * Führe die Nachrichten aller Teilnehmer in einem Datenstrom zusammen.
     * Abonniere den Datenstrom und gib die Nachrichten mit der Methode this.log() aus.
     * - merge (Turn multiple observables into a single observable.)
     * - concat (Emit values from source 1, when complete, subscribe to source 2...)
     * - race (The observable to emit first is used.)
     * - forkJoin (When all observables complete, emit the last emitted value from each.)
     */

    forkJoin([
      this.msg.julia$.pipe(map(msg => 'JULIA: ' + msg)),
      this.msg.georg$.pipe(map(msg => 'GEORG: ' + msg)),
      this.msg.john$.pipe(map(msg => 'JOHN: ' + msg))
    ]).subscribe(
      msg => this.log(msg),
      () => {},
      () => this.log('All members left')
    );

    function myStartWith(el: number) {
      return function (source$) {
        return concat(of(el), source$);
      };
    }


    timer(1000).pipe(
      myStartWith(100)
    )


    /******************************/
  }

  private log(msg: any) {
    this.logStream$.next(msg.toString());
  }
}
