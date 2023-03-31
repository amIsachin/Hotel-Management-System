import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  constructor(private _hotelService:HotelService) { }

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
      if (response == true){
        alert('success !!');
      }
      else {
        alert('failed !!');
      }
    });
  }

}
