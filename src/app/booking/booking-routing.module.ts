import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';
import { BookHotelComponent } from './components/book-hotel/book-hotel.component';

const routes: Routes = [
  {
    path: 'booking', component: BookingComponent,
     children: [
      { path: 'book-hotel', component: BookHotelComponent }
    ] 
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookingRoutingModule { }
