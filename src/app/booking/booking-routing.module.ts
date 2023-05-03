import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';
import { BookNowComponent } from './components/book-now/book-now.component';

const routes: Routes = [
  { path: 'booking', component: BookingComponent,
    children: [
      { path: 'book-now', component: BookNowComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
