import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HotelModule } from './hotel/hotel.module';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HotelDialogComponent } from './Dialogs/hotel-dialog/hotel-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UserDeleteDialogComponent } from './Dialogs/user-delete-dialog/user-delete-dialog.component';
import { BookingModule } from './booking/booking.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    HotelDialogComponent,
    UserDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    HotelModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    MatDialogModule,
    MatCardModule,
    BookingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
