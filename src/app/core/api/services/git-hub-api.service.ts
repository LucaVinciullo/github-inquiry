import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpService } from '../../http/http.service';
import { ReposResponse } from '../model/repos/repos-response.interface';

const gitHubApiUrl = 'https://api.github.com/search';

@Injectable()
export class GitHubApiService {
  constructor(private httpService: HttpService) {}

  getRepos(params = ''): Observable<ReposResponse> {
    // TODO ?q=
    const url = `${gitHubApiUrl}repositories${params}`;
    return this.httpService.get(url);
  }
}
