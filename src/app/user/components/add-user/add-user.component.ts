import { Component, OnInit } from '@angular/core';
import { HotelEntity } from 'src/app/Entities/Hotel.Entity';
import { UserEntity } from 'src/app/Entities/User.Entity';
import { HotelService } from 'src/app/services/hotel.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public id:number = 0;
  public hotelEntity:HotelEntity[] = [];
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

  constructor (private _hotelService: HotelService, private _userService:UserService) { }
   
  ngOnInit(): void {
    this.getAllHotels();
    console.log(new Date)
  }

  /**
   * Get all hotels
   */
  public getAllHotels() {
    this._hotelService.getAllHotels().subscribe(response => {
      this.hotelEntity = response;
    });
  }

  /**
   * Add user functionality.
   */
  public addUser(userEntity:UserEntity) {
    console.log(userEntity);
    userEntity.created = new Date;
    this._userService.addStudent(userEntity).subscribe(response => {
      console.log(response)
    })
  }
}
