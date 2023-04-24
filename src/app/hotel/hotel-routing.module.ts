import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './hotel.component';
import { AllHotelsComponent } from './components/all-hotels/all-hotels.component';
import { AddNewHotelComponent } from './components/add-new-hotel/add-new-hotel.component';
import { UpdateHotelComponent } from './components/update-hotel/update-hotel.component';

const routes: Routes = [
  {
    path: 'hotel', component: HotelComponent,
    children: [
      { path: 'all-hotels', component: AllHotelsComponent },
      { path: 'add-hotel', component: AddNewHotelComponent },
      { path: 'update-hotel/:hotelId', component: UpdateHotelComponent }
    ]
  },
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
