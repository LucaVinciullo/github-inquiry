import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ReposForm } from 'src/app/feature-modules/repos/model/repos-form.interface';
import { HttpService } from '../../http/http.service';
import {Commit} from '../model/commits/commit.interface';
import { ReposResponse } from '../model/repos/repos-response.interface';

const GIT_HUB_API_BASE_URL = 'https://api.github.com/';

const ITEMS_PER_PAGE = 100;

@Injectable()
export class GitHubApiService {
  constructor(private httpService: HttpService) { }

  getRepos(reposForm: ReposForm): Observable<ReposResponse> {
    // TODO params
    const params = this.retrieveReposParams(reposForm);
    const url = `${GIT_HUB_API_BASE_URL}${params}`;
    return this.httpService.get(url);
  }

  getCommits(owner: string, repo: string): Observable<Commit[]> {
    const params = `repos/${owner}/${repo}/commits`;
    const url = `${GIT_HUB_API_BASE_URL}${params}`;
    return this.httpService.get(url);
  }

  private retrieveReposParams(reposForm: ReposForm): string {
    if (reposForm.searchBy === 'name') {
      return this.retrieveNameParams(reposForm);
    } else {
      return this.retrieveIssueParams(reposForm);
    }
  }

  private retrieveNameParams(reposForm: ReposForm): string {
    let params: string = `search/repositories?q=${reposForm.name}`
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
