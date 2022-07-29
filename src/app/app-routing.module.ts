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
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
