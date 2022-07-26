import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpResponseInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map(event => this.checkEventInstanceOfHttpErrorResponse(event, req)
      ));
  }

  private checkEventInstanceOfHttpErrorResponse(event: HttpEvent<any>, req: HttpRequest<any>) {
    if (event instanceof HttpErrorResponse) {
      // TODO apertura dialog
    }
    return event;
  }
}
