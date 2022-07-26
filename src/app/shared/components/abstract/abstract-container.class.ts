import { Component, OnDestroy, ViewContainerRef } from '@angular/core';

import { AbstractComponentClass } from './abstract-component.class';
import { AbstractFacadeClass } from './abstract-facade.class';

@Component({
  template: ''
})
export abstract class AbstractContainerClass extends AbstractComponentClass implements OnDestroy {
  flagHideLoader$ = this.facade.flagHideLoader$;

  /**
   * If true, invokes methods in the facade service that clear subscriptions and reset observables
   *
   * @abstract
   * @type {boolean}
   */
  abstract flagClearStateOnDestroy: boolean;

  constructor(vcr: ViewContainerRef, protected facade: AbstractFacadeClass) {
    super(vcr);
    this.facade.initSubscription();
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
    if (this.flagClearStateOnDestroy) {
      this.facade.clearObservables();
      this.facade.clearSubscription();
    }
  }
}
