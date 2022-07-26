import { Injectable } from '@angular/core';

import { GitHubApiService } from 'src/app/core/api/services/git-hub-api.service';

@Injectable()
export class CommitsFacadeService {
  constructor(private gitHubService: GitHubApiService) { }
}
