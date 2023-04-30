import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelEntity } from 'src/app/Entities/Hotel.Entity';
import { UserViewModel } from 'src/app/Entities/ViewModels/userViewModel';
import { HotelService } from 'src/app/services/hotel.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  public hotelEntity: HotelEntity[] = [];
  public userViewModel: UserViewModel = {
    userId:0,
    name:'',
    gender:'',
    age:0,
    phoneNumber:'',
    city:'',
    fromDate: new Date,
    hotelId:0,
  };
  public userId: number;

  constructor(private _userService: UserService, private _hotelService: HotelService, private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.getAllHotels();
    this.getUserIdFromRoute();
    this.getUserByUserIdWithHotel(this.userId);
  }

  /**
   * get user id value from route
   */
  public getUserIdFromRoute() {
    this.activatedRoute.params.subscribe(response => {
      this.userId = response['userId'];
    })
  }

  public getUserByUserIdWithHotel(userId:number) {
    this.activatedRoute.params.subscribe(response => {
      this.userId = response['userId'];
    });

    this._userService.getUserByUserIdWithHotel(this.userId).subscribe(response => {
      this.userViewModel.name = response.name;
      this.userViewModel.gender = response.gender;
      this.userViewModel.age = response.age;
      this.userViewModel.phoneNumber = response.phoneNumber;
      this.userViewModel.city = response.city;
      this.userViewModel.fromDate = response.fromDate;
      this.userViewModel.hotelId = response.hotelEntity.hotelId;
    });
  }

  /**
   * Get all hotels list.
   */
  public getAllHotels() {
    this._hotelService.getAllHotels().subscribe(response => {
      this.hotelEntity = response;
    })
  }

  /**
   * Update user functionality.
   */
  public upadteUser(userViewModel: UserViewModel) {
    this._userService.updateUser(this.userId, this.userViewModel).subscribe(response => {
      if(response === true) {
        this.snackBar.open('User updated successfully', undefined, {duration: 3000});
        setTimeout(() => {
          this.router.navigateByUrl('/user/all-users');
        }, 3000);
      }
      else {
        this.snackBar.open('Oop\'s something went wrong!! Please try again', undefined, {duration:3000});
      }
    })
  }
}