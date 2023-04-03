import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HotelEntity } from 'src/app/Entities/Hotel.Entity';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-add-new-hotel',
  templateUrl: './add-new-hotel.component.html',
  styleUrls: ['./add-new-hotel.component.css']
})
export class AddNewHotelComponent {

  public hotelEntity: HotelEntity = {
    hotelId:0,
    name:'',
    rentParDay:0,
    maximumCapacity:0,
    created:new Date
  };

  constructor(private _hotelService:HotelService, private _snackBar: MatSnackBar, private _router: Router) { }

  public addNewHotelForm = new FormGroup({
    name: new FormControl(),
    rentParDay: new FormControl(),
    maximumCapacity: new FormControl(),
    created: new FormControl()
  });



  /**
   * Add new hotel functionaltity.
   */
  public addHotel(): void {
    this.hotelEntity.name = this.addNewHotelForm.controls.name.value;
    this.hotelEntity.rentParDay = this.addNewHotelForm.value.rentParDay;
    this.hotelEntity.maximumCapacity = this.addNewHotelForm.value.maximumCapacity;
    this.hotelEntity.created = this.addNewHotelForm.value.created;

    this._hotelService.addNewHotel(this.hotelEntity).subscribe(response => {
      if (response === true){
        this._snackBar.open('Hotel added successfully !!', undefined, { duration: 3000 });
        setTimeout(() => {
          this._router.navigateByUrl('hotel/all-hotels');
        }, 4000);
       
      }
      else {
        this._snackBar.open('Oop\'s, try again one more time !!', undefined, { duration: 3000 });
      }
    });
  }
}
