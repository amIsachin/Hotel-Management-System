import { Component, OnInit } from '@angular/core';
import { HotelEntity } from 'src/app/Entities/Hotel.Entity';
import { UserEntity } from 'src/app/Entities/User.Entity';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent implements OnInit {
  public hotelEntity:HotelEntity[]=[];
  public userEntity:UserEntity = {
    userId: 0,
    name: '',
    gender: '',
    age: 0,
    phoneNumber: '',
    city: '',
    fromDate: new Date,
    hotelEntity: {
      hotelId: 0,
      name: '',
      rentParDay: 0,
      maximumCapacity: 0,
      created: new Date
    },
    created: new Date
  }

  constructor (private _hotelService: HotelService) { }

  ngOnInit(): void {
    this.getAllHotels();
  }

  /**
   * Get all hotels.
   */
  public getAllHotels() {
    this._hotelService.getAllHotels().subscribe(response => {
      this.hotelEntity = response;
    });
  }

  /**
   * book hotel.
   */
  public bookHotel(user:UserEntity) {
    console.log(user);

  }

}
