// tslint:disable:incoherent-file-name
import { Injectable } from '@angular/core';

import { Subscription } from 'rxjs';

@Injectable()
export abstract class AbstractFacadeClass {
  protected subscription = new Subscription();

  constructor() {}

  clearSubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
