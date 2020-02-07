import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { MeasureValuesService } from './measure-values.service';

@Component({
  selector: 'rxw-multicast',
  templateUrl: './multicast.component.html',
})
export class MulticastComponent implements OnInit {

  listeners = [];
  logStream$ = new Subject();

  measureValues$: Observable<number>; // später: Subject<number>

  constructor(private mvs: MeasureValuesService) { }

  ngOnInit() {
    /*******************************/



    /*******************************/
  }

  addListener() {
    this.listeners.push(this.mvs.generateRandomString(5));
  }

  addConsoleListener() {
    const randomString = this.mvs.generateRandomString(5);
    this.measureValues$.subscribe(e => this.logStream$.next(`${randomString} ${e}`));
  }

}
