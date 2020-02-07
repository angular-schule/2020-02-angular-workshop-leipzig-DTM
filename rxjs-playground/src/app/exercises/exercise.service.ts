import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  echo(input: string, count = 5): Observable<string> {
    return timer(500, 700).pipe(
      take(count),
      map(i => `ECHO ${i + 1}: ${input}`)
    );
  }

  randomError(): Observable<string> {
    const errMsg = 'Something bad happened...';
    const successMsg = 'Everything\'s fine';

    return new Observable(observer => {
      if (Math.random() > 0.3) {
        console.error(errMsg);
        observer.error(errMsg);
      } else {
        console.log(successMsg);
        observer.next(successMsg);
      }
    });
  }
}
