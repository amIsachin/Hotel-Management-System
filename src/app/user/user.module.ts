import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AddUserComponent } from './components/add-user/add-user.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './components/update-user/update-user.component';

@NgModule({
  declarations: [
    AllUsersComponent,
    UserComponent,
    AddUserComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    FormsModule,
    MatSnackBarModule
  ]
})
export class UserModule { }
