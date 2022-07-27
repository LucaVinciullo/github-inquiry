import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import { Repo } from 'src/app/core/api/model/repos/repo.interface';
import { ReposResponse } from 'src/app/core/api/model/repos/repos-response.interface';
import { GitHubApiService } from 'src/app/core/api/services/git-hub-api.service';
import { AbstractFacadeClass } from 'src/app/shared/components/abstract/abstract-facade.class';

@Injectable()
export class ReposFacadeService extends AbstractFacadeClass {
  reposSubj$ = new Subject<Repo[] | null>();
  repos$: Observable<Repo[] | null> = this.reposSubj$.asObservable();

  constructor(private gitHubService: GitHubApiService) {
    super();
  }

  getRepos() {
    /* Clear previous results */
    this.reposSubj$.next(null);
    /* Clear previous results */
    this.subscription.add(
      this.gitHubService.getRepos().pipe(first()).subscribe((response: ReposResponse) => {
        console.log('getRepos', response);
        this.reposSubj$.next(response?.items || []);
      }));
  }
}
