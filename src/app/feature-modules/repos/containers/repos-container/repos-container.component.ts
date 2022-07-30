import {ChangeDetectionStrategy, Component, ViewContainerRef} from '@angular/core';
import {Repo} from 'src/app/core/api/model/repos/repo.interface';

import {AbstractContainerClass} from 'src/app/shared/components/abstract/abstract-container.class';
import {ReposForm} from '../../model/repos-form.interface';
import {ReposFacadeService} from '../../services/repos-facade.service';

@Component({
  selector: 'app-repos-container',
  templateUrl: './repos-container.component.html',
  styleUrls: ['./repos-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReposContainerComponent extends AbstractContainerClass {
  flagClearStateOnDestroy = false;

  repos$ = this.facade.repos$;
  formData$ = this.facade.formData$;

  readonly displayedColumns = ['avatarUrl', 'name', 'creationDate', 'action'];

  constructor(vcr: ViewContainerRef, protected override facade: ReposFacadeService) {
    super(vcr, facade);
  }

  searchRepos(reposForm: ReposForm) {
    this.facade.searchRepos(reposForm);
  }

  saveFormData(reposForm: ReposForm) {
    this.facade.saveFormData(reposForm);
  }

  goToCommits(repo: Repo) {
    this.facade.goToCommits(repo);
  }
}
