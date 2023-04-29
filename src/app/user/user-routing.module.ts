import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UserComponent } from './user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'all-users', component: AllUsersComponent },
      { path: 'add-user', component: AddUserComponent },
      { path: 'update-user/:userId', component: UpdateUserComponent }
    ]
  }
]

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], 

  exports: [RouterModule]
})
export class UserRoutingModule { }
