import { Injectable } from '@angular/core';

import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoaderService } from 'src/app/core/loader/services/loader.service';

@Injectable()
export abstract class AbstractFacadeClass {
  flagHideLoader$ = this.loaderService.flagLoader$.pipe(map(flagLoader => !flagLoader));

  protected subscription: Subscription | null = null;

  constructor(protected loaderService: LoaderService) { }

  abstract clearObservables(): void

  initSubscription() {
    this.subscription = new Subscription();
  }

  clearSubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
}
