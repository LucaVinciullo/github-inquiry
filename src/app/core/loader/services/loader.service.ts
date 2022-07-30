import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class LoaderService {
  private apiLoaderCounterSubj$ = new BehaviorSubject<number>(0);
  private apiLoaderCounter$ = this.apiLoaderCounterSubj$.asObservable();
  flagLoader$: Observable<boolean> = this.apiLoaderCounter$.pipe(map(counter => !!counter));

  constructor() { }

  incrementLoaderCounter() {
    this.apiLoaderCounterSubj$.next(this.apiLoaderCounterSubj$.value + 1);
  }

  /**
   * The purpose of the timeout is to smoothen the loading presen in case of subsequent http requests
   */
  decrementLoaderCounter() {
    setTimeout(() => {
      this.apiLoaderCounterSubj$.next(this.apiLoaderCounterSubj$.value - 1);
    }, 250);
  }
}
