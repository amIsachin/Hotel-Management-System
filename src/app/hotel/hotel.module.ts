import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllHotelsComponent } from './components/all-hotels/all-hotels.component';
import { HotelRoutingModule } from './hotel-routing.module';
import { HotelComponent } from './hotel.component';


import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    AllHotelsComponent,
    HotelComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    MatTableModule,
    MatFormFieldModule
  ],
})
export class HotelModule { }
