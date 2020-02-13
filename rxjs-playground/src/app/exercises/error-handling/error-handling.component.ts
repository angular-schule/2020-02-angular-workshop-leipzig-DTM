import { Component } from '@angular/core';
import { Subject, throwError, of, EMPTY } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-error-handling',
  templateUrl: './error-handling.component.html',
})
export class ErrorHandlingComponent {

  logStream$ = new Subject();

  constructor(private es: ExerciseService) { }

  start() {
    this.es.randomError().pipe(
      // retry(5)
      catchError(err => {
        console.log('Fehlerausgabe:', err);

        // return throwError('NEUER FEHLER'); // Fehler weiterwerfen
        // return of('Nichts passiert!', 'Wirklich nicht!'); // Fehler ersetzen
        return EMPTY; // Fehler verschlucken
      })
    ).subscribe(
      value => this.logStream$.next(value),
      err => this.logStream$.next('💥 ERROR: ' + err)
    );
  }
}
