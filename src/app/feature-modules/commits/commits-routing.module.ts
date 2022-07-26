import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommitsContainerComponent } from './containers/commits-container/commits-container.component';

const routes: Routes = [
  {
    path: '',
    component: CommitsContainerComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommitsRoutingModule {
}
