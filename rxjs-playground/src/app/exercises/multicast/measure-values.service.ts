import { Injectable } from '@angular/core';
import { merge, timer, Observable } from 'rxjs';
import { map, scan } from 'rxjs/operators';
import { Random, MersenneTwister19937 } from 'random-js';

@Injectable({
  providedIn: 'root'
})
export class MeasureValuesService {

  getValues(): Observable<number> {
    return merge(
      timer(0, this.generateRandomInt(3800, 5000)).pipe(map(() => this.generateRandom())),
      timer(this.generateRandomInt(800, 2000), this.generateRandomInt(3800, 4500)).pipe(map(() => this.generateRandom())),
      timer(this.generateRandomInt(1500, 3500), 7300).pipe(map(() => this.generateRandom()))
    ).pipe(scan((acc, item) => acc + item, 50 + Math.random()));
  }

  private generateRandom(): number {
    return new Random(MersenneTwister19937.autoSeed()).real(-1, 2);
  }

  private generateRandomInt(min: number, max: number): number {
    return new Random(MersenneTwister19937.autoSeed()).integer(min, max);
  }

  generateRandomString(len: number): string {
    return new Random(MersenneTwister19937.autoSeed()).string(len).toUpperCase();
  }
}
