import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { CommitsRoutingModule } from './commits-routing.module';
import { CommitsContainerComponent } from './containers/commits-container/commits-container.component';
import { CommitsFacadeService } from './services/commits-facade.service';

@NgModule({
  imports: [
    SharedModule,
    CommitsRoutingModule
  ],
  declarations: [
    CommitsContainerComponent
  ],
  providers: [
    CommitsFacadeService
  ]
})
export class CommitsModule {}
