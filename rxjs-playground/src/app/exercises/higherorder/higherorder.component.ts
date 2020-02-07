import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { mergeMap, concatMap, switchMap, exhaustMap } from 'rxjs/operators';

import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-higherorder',
  templateUrl: './higherorder.component.html',
})
export class HigherorderComponent implements OnInit {

  logStream$ = new Subject<string>();
  source$ = new Subject<string>();
  result$: Observable<string>;

  constructor(private es: ExerciseService) { }

  ngOnInit() {

    /******************************/
    /**
     * Quelle: this.source$
     * Ziel: this.result$
     */

    

    /******************************/

    this.source$.subscribe(value => this.logStream$.next(`SOURCE: ${value}`));
    this.result$.subscribe(value => this.logStream$.next(`🚀 ${value}`));
  }

  echoTest() {
    this.es.echo('TEST').subscribe(value => this.logStream$.next(value));
  }

  sendValue(value: string) {
    this.source$.next(value);
  }

}
