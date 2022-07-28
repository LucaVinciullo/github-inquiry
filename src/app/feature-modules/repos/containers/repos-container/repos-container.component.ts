import { ChangeDetectionStrategy, Component, ViewContainerRef } from '@angular/core';

import { AbstractContainerClass } from 'src/app/shared/components/abstract/abstract-container.class';
import { ReposForm } from '../../model/repos-form.interface';
import { ReposFacadeService } from '../../services/repos-facade.service';

@Component({
  selector: 'app-repos-container',
  templateUrl: './repos-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReposContainerComponent extends AbstractContainerClass {
  repos$ = this.reposFacade.repos$;

  constructor(vcr: ViewContainerRef, protected reposFacade: ReposFacadeService) {
    super(vcr, reposFacade);
  }

  searchRepos(reposForm: ReposForm) {
    this.reposFacade.searchRepos(reposForm);
  }
}
