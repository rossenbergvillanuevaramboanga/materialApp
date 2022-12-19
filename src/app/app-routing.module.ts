import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailUserComponent } from './components/detail-user/detail-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListUserComponent
  },
  {
    path: 'detail/:id',
    component: DetailUserComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
