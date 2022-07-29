import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { ReposFormComponentComponent } from './components/repos-form-component/repos-form-component.component';
import { ReposContainerComponent } from './containers/repos-container/repos-container.component';
import { ReposRoutingModule } from './repos-routing.module';
import { ReposFacadeService } from './services/repos-facade.service';

@NgModule({
  imports: [
    SharedModule,
    ReposRoutingModule
  ],
  declarations: [
    ReposContainerComponent,
    ReposFormComponentComponent
  ],
  providers: [
    ReposFacadeService
  ]
})
export class ReposModule {
}
