import {Injectable} from '@angular/core';

import {Observable, Subject} from 'rxjs';
import {first} from 'rxjs/operators';
import {Repo} from 'src/app/core/api/model/repos/repo.interface';
import {ReposResponse} from 'src/app/core/api/model/repos/repos-response.interface';
import {GitHubApiService} from 'src/app/core/api/services/git-hub-api.service';
import {AbstractFacadeClass} from 'src/app/shared/components/abstract/abstract-facade.class';
import {ReposForm} from '../model/repos-form.interface';

const ITEMS_PER_PAGE = 100;

@Injectable()
export class ReposFacadeService extends AbstractFacadeClass {
  reposSubj$ = new Subject<Repo[] | null>();
  repos$: Observable<Repo[] | null> = this.reposSubj$.asObservable();

  constructor(private gitHubService: GitHubApiService) {
    super();
  }

  searchRepos(reposForm: ReposForm) {
    /* Clear previous results */
    this.reposSubj$.next(null);
    const params = this.retrieveReposParams(reposForm);
    console.log('searchRepos', params);
    this.subscription.add(
      this.gitHubService.getRepos(params).pipe(first()).subscribe((response: ReposResponse) => {
        console.log('getRepos', typeof response);
        this.reposSubj$.next(response?.items || []);
      }));
  }

  private retrieveReposParams(reposForm: ReposForm): string {
    if (reposForm.searchBy === 'name') {
      return this.retrieveNameParams(reposForm);
    } else {
      return this.retrieveIssueParams(reposForm);
    }
  }

  private retrieveNameParams(reposForm: ReposForm): string {
    let params: string = `search/repositories/?q=${reposForm.name}`
    if (reposForm.language) {
      params = `${params}+language:${reposForm.language}`;
    }
    /* 0 stars won't be added as query param */
    if (reposForm.stars) {
      params = `${params}+stars:>${reposForm.stars}`;
    }
    params = `${params}&per_page=${ITEMS_PER_PAGE}`;
    return params
  }

  private retrieveIssueParams(reposForm: ReposForm): string {
    // TODO
    return '';
  }
}
