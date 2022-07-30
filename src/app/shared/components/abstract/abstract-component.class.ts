import { Component, OnDestroy, ViewContainerRef } from '@angular/core';

import { Subscription } from 'rxjs';

@Component({
  template: ''
})
export abstract class AbstractComponentClass implements OnDestroy {
  protected subscription = new Subscription();

  constructor(public vcr: ViewContainerRef) {
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    if (this.vcr) {
      this.vcr.clear();
    }
  }
}
