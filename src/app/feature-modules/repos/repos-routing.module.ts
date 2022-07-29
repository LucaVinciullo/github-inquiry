import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReposContainerComponent } from './containers/repos-container/repos-container.component';

const routes: Routes = [
  {
    path: '',
    component: ReposContainerComponent
  },
  {
    path: 'commits/:owner/:repo',
    loadChildren: () => import('../commits/commits.module').then(m => m.CommitsModule)
  },
  {
    path: '**',
    redirectTo: '/repos'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReposRoutingModule {
}
