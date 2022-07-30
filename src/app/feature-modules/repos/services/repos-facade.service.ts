import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Repo } from 'src/app/core/api/model/repos/repo.interface';
import { ReposResponse } from 'src/app/core/api/model/repos/repos-response.interface';
import { GitHubApiService } from 'src/app/core/api/services/git-hub-api.service';
import { LoaderService } from 'src/app/core/loader/services/loader.service';
import { AbstractFacadeClass } from 'src/app/shared/components/abstract/abstract-facade.class';
import { ReposForm } from '../model/repos-form.interface';

@Injectable()
export class ReposFacadeService extends AbstractFacadeClass {
  private reposSubj$ = new BehaviorSubject<Repo[] | null>(null);
  repos$: Observable<unknown & Repo[] | null> = this.reposSubj$.asObservable();
  private formDataSubj$ = new BehaviorSubject<ReposForm | null>(null)
  formData$ = this.formDataSubj$.asObservable();

  constructor(private gitHubService: GitHubApiService, protected override loaderService: LoaderService, private router: Router) {
    super(loaderService);
  }

  searchRepos(reposForm: ReposForm) {
    /* Clear previous results */
    this.reposSubj$.next(null);
    this.subscription?.add(
      this.gitHubService.getRepos(reposForm).pipe(first()).subscribe((response: ReposResponse) => {
        this.reposSubj$.next(response?.items || []);
      })
    );
  }

  goToCommits(repo: Repo) {
    const owner = repo?.owner?.login;
    const name = repo?.name;
    if (owner && name) {
      this.router.navigateByUrl(`repos/commits/${repo.owner.login}/${repo.name}`);
    } else {
      // TODO error
    }
  }

  saveFormData(reposForm: ReposForm): void {
    this.formDataSubj$.next(reposForm);
  }

  /*
  In this container clearing observables is not to be implemented:
  It is desirable to return to this page after consulting the list of commints and to find the user's previous search results.
  */
  clearObservables() { }
}
