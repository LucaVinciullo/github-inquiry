// tslint:disable:incoherent-file-name
import { Component, OnDestroy, ViewContainerRef } from '@angular/core';

import { AbstractComponentClass } from './abstract-component.class';
import { AbstractFacadeClass } from './abstract-facade.class';

@Component({
  template: ''
})
export abstract class AbstractContainerClass extends AbstractComponentClass implements OnDestroy {
  constructor(vcr: ViewContainerRef, protected facade: AbstractFacadeClass) {
    super(vcr)
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
    this.facade.clearSubscription();
  }
}
