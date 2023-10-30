import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { MainUserComponent } from './main-user/main-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserService } from '../Core/Services/user.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListUserComponent, MainUserComponent, UpdateUserComponent, AddUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  providers: [UserService]
})
export class UserModule { }
