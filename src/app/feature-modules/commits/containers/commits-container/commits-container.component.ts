import { ChangeDetectionStrategy, Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractContainerClass } from 'src/app/shared/components/abstract/abstract-container.class';
import { CommitsFacadeService } from '../../services/commits-facade.service';

@Component({
  selector: 'app-commits-container',
  templateUrl: './commits-container.component.html',
  styleUrls: ['./commits-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CommitsContainerComponent extends AbstractContainerClass implements OnInit {
  readonly displayedColumns = ['author', 'url', 'message'];

  flagClearStateOnDestroy = true;

  owner: string | null | undefined;
  repo: string | null | undefined;
  commits$ = this.facade.commits$;

  constructor(vcr: ViewContainerRef, protected override facade: CommitsFacadeService, private route: ActivatedRoute) {
    super(vcr, facade);
  }

  ngOnInit(): void {
    this.subscription.add(
      this.route.paramMap.subscribe(params => {
        const owner = params.get('owner');
        const repo = params.get('repo');
        this.owner = owner;
        this.repo = repo;
        console.log(owner, repo);
        if (owner && repo) {
          this.facade.searchCommits(owner, repo);
        }
      })
    );
  }

  goBack() {
    this.facade.goBack();
  }
}
