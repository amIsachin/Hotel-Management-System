import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AllUsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UserModule { }
