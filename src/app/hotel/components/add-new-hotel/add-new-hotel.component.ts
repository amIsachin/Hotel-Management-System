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

  public hotelEntity: HotelEntity;
  constructor(private _hotelService:HotelService) { }

  public addNewHotel= new FormGroup({
    name: new FormControl(''),
    rentParDay: new FormControl(),
    maximumCapacity: new FormControl(),
    created: new FormControl()
  });



  public addHotel(): void {
    console.log(this.addNewHotel.controls['name'].value)
    console.log(this.addNewHotel.get('name')?.value)
    this.hotelEntity.name = this.addNewHotel.controls['name'].value;
    console.log(this.hotelEntity.name)

    // this.hotelEntity.name = this.addNewHotel.controls.name.toString();
    // console.log(this.hotelEntity.name)
    // this.hotelEntity.rentParDay = this.addNewHotel.value.rentParDay;
    // this.hotelEntity.maximumCapacity = this.addNewHotel.value.maximumCapacity;
    // this.hotelEntity.created = this.addNewHotel.value.created;

    // this._hotelService.addNewHotel(this.hotelEntity).subscribe(response => {
    //   if (response == true){

    //   }
    //   else {

    //   }
    // });
  }

}
