import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { BookHotelComponent } from './components/book-hotel/book-hotel.component';

@NgModule({
  declarations: [
    BookingComponent,
    BookHotelComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
  ]
})
export class BookingModule { }
