import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'User', component: UserListComponent },
  { path: 'User/:id', component: UserEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routecomponent = [HomeComponent, UserListComponent, UserEditComponent]

