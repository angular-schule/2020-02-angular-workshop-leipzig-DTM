import { Component, OnInit } from '@angular/core';
import { Observable, of, from, timer, interval, Subject } from 'rxjs';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent implements OnInit {

  logStream$ = new Subject<number | string>();

  ngOnInit() {
    /**
     * Erstelle ein Observable und abonniere den Datenstrom.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */



     /*****************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
