import { ChangeDetectionStrategy, Component, ViewContainerRef } from '@angular/core';

import { AbstractContainerClass } from 'src/app/shared/components/abstract/abstract-container.class';
import { ReposFacadeService } from '../../services/repos-facade.service';

@Component({
  selector: 'app-repos-container',
  templateUrl: './repos-container.component.html',
  styleUrls: ['./repos-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReposContainerComponent extends AbstractContainerClass {
  repos$ = this.reposFacade.repos$;

  constructor(vcr: ViewContainerRef, protected reposFacade: ReposFacadeService) {
    super(vcr, reposFacade);
    this.reposFacade.getRepos();
  }
}
