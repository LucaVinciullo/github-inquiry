import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {first, Subject} from 'rxjs';
import {Commit} from 'src/app/core/api/model/commits/commit.interface';

import {GitHubApiService} from 'src/app/core/api/services/git-hub-api.service';
import {LoaderService} from 'src/app/core/loader/services/loader.service';
import {AbstractFacadeClass} from 'src/app/shared/components/abstract/abstract-facade.class';

@Injectable()
export class CommitsFacadeService extends AbstractFacadeClass {
  private commitsSubj$ = new Subject<Commit[] | null>();
  commits$ = this.commitsSubj$.asObservable();

  constructor(protected override loaderService: LoaderService, private gitHubService: GitHubApiService, private router: Router) {
    super(loaderService);
  }

  searchCommits(owner: string, repo: string) {
    this.subscription.add(
      this.gitHubService.getCommits(owner, repo).pipe(first()).subscribe((response: any) => {
        this.commitsSubj$.next(response || []);
      })
    );
  }

  goBack() {
    this.router.navigateByUrl('/repos');
  }

  clearObservables() {
    this.commitsSubj$.next(null);
  }
}
