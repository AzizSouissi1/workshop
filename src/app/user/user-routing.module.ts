import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { MainUserComponent } from './main-user/main-user.component';

const routes: Routes = [
  { path: '', component: MainUserComponent, children: [{ path: 'users/:category', component: ListUserComponent }] },
  { path: 'users/:category/editUser/:id', component: UpdateUserComponent },
  { path: 'users/:category/addUser', component: AddUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {

}
