import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/repos',
    pathMatch: 'full'
  },
  {
    path: 'repos',
    loadChildren: () => import('./feature-modules/repos/repos.module').then(m => m.ReposModule)
  },
  {
    path: 'commits',
    loadChildren: () => import('./feature-modules/commits/commits.module').then(m => m.CommitsModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
