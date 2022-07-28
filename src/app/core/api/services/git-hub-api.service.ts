import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpService } from '../../http/http.service';
import { ReposResponse } from '../model/repos/repos-response.interface';

const GIT_HUB_API_BASE_URL = 'https://api.github.com/';

@Injectable()
export class GitHubApiService {
  constructor(private httpService: HttpService) {}

  getRepos(params = ''): Observable<ReposResponse> {
    // TODO params
    const url = `${GIT_HUB_API_BASE_URL}${params}`;
    return this.httpService.get(url);
  }
}
