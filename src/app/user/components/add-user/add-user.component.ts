import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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

  constructor (private _hotelService: HotelService, private _userService:UserService, private router: Router, private snackBar: MatSnackBar) { }
   
  ngOnInit(): void {
    this.getAllHotels();
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
   * Get hotel by hotel id.
   * @param hotelId
   * @returns 
   */
  public getHotelByHotelId(hotelId:number): HotelEntity {
    let hotelRecord:HotelEntity = {
      hotelId:0,
      name:'',
      maximumCapacity:0,
      rentParDay:0,
      created: new Date
    }

    this._hotelService.getHotelByHotelId(hotelId).subscribe(response => {
      hotelRecord = response
    });

    return hotelRecord;
  }

  /**
   * Add user functionality.
   */
  public addUser(userEntity:any) {
    userEntity.created = new Date;
    this._userService.addStudent(userEntity).subscribe(response => {
      if(response == true) {
        this.snackBar.open('User added successfully', undefined, {duration: 3000});
        setTimeout(() => {
          this.router.navigateByUrl('user/all-users')
        }, 4000);
      }
      else {
        this.snackBar.open('Oop\'s something wrror please try again');
      }
    });
  }
}
