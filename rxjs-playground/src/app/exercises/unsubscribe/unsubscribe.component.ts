import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, timer, Subscription } from 'rxjs';
import { takeWhile, takeUntil, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'rxw-unsubscribe',
  templateUrl: './unsubscribe.component.html',
})
export class UnsubscribeComponent implements OnInit, OnDestroy {

  logStream$ = new Subject<string | number>();

  destroy$ = new Subject();

  ngOnInit() {
    const interval$ = timer(0, 1000);

    interval$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      msg => this.log(msg),
      err => this.log('ERROR: ' + err),
      () => this.log('COMPLETED')
    );
  }

  ngOnDestroy() {
    this.destroy$.next();

    this.logStream$.next('DESTROY');
  }


  log(msg: string | number) {
    console.log(msg);
    this.logStream$.next(msg);
  }
}
