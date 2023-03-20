import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllHotelsComponent } from './components/all-hotels/all-hotels.component';
import { HotelRoutingModule } from './hotel-routing.module';
import { HotelComponent } from './hotel.component';



@NgModule({
  declarations: [
    AllHotelsComponent,
    HotelComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule
  ]
})
export class HotelModule { }
