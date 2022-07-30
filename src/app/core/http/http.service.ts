import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {catchError, finalize, map} from 'rxjs/operators';
import {LoaderService} from '../loader/services/loader.service';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient, private loaderService: LoaderService) { }

  get(url: string): Observable<any> {
    this.initLoading();
    return this.http.get(url).pipe(
      map(response => {
        this.logPerformance();
        return response;
      }),
      catchError(err => {
        this.logPerformance();
        this.reportError();
        throw err;
      }),
      finalize(() => {
        this.stopLoading();
      })
    );
  }

  private initLoading() {
    this.loaderService.incrementLoaderCounter();
  }

  private stopLoading() {
    this.loaderService.decrementLoaderCounter();
  }

  private logPerformance() {
    // TODO
  }

  private reportError() {
    // TODO
  }
}
