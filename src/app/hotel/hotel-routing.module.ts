import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './hotel.component';
import { AllHotelsComponent } from './components/all-hotels/all-hotels.component';

const routes: Routes = [
  {
    path: 'hotel', component: HotelComponent,
    children: [
      { path: 'all-hotels', component: AllHotelsComponent },
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
