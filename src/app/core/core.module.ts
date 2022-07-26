import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { GitHubApiService } from './api/services/git-hub-api.service';
import { HttpRequestInterceptorService } from './http/http-request-interceptor';
import { HttpResponseInterceptorService } from './http/http-response-interceptor';
import { HttpService } from './http/http.service';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    HttpClientModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        HttpService,
        GitHubApiService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpRequestInterceptorService,
          multi: true
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpResponseInterceptorService,
          multi: true
        }
      ]
    };
  }
}
