import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllHotelsComponent } from './components/all-hotels/all-hotels.component';
import { HotelRoutingModule } from './hotel-routing.module';
import { HotelComponent } from './hotel.component';


import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';



import { AddNewHotelComponent } from './components/add-new-hotel/add-new-hotel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateHotelComponent } from './components/update-hotel/update-hotel.component';



@NgModule({
  declarations: [
    AllHotelsComponent,
    HotelComponent,
    AddNewHotelComponent,
    UpdateHotelComponent,
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatDialogModule
  ],
})
export class HotelModule { }