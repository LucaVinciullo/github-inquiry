// tslint:disable:incoherent-file-name
import { Injectable } from '@angular/core';

import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoaderService } from 'src/app/core/loader/services/loader.service';

@Injectable()
export abstract class AbstractFacadeClass {
  flagHideLoader$ = this.loaderService.flagLoader$.pipe(map(flagLoader => !flagLoader));

  protected subscription = new Subscription();

  constructor(protected loaderService: LoaderService) { }

  abstract clearObservables(): void

  clearSubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
