import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpService } from '../../http/http.service';
import { ReposResponse } from '../model/repos/repos-response.interface';

const GIT_HUB_API_BASE_URL = 'https://api.github.com/search/';
const SEARCH_ITEMS_PER_PAGE = 100;

@Injectable()
export class GitHubApiService {
  constructor(private httpService: HttpService) {}

  getRepos(name = 'luka'): Observable<ReposResponse> {
    // TODO params
    const params = `?q=${name}&per_page=${SEARCH_ITEMS_PER_PAGE}`
    const url = `${GIT_HUB_API_BASE_URL}repositories${params}`;
    return this.httpService.get(url);
  }
}
