import { Component, OnInit } from '@angular/core';
import { Subject, merge, concat, race, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

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



    /******************************/
  }

  private log(msg: any) {
    this.logStream$.next(msg.toString());
  }
}
