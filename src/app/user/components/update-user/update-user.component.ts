import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private _userService: UserService, private _hotelService: HotelService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllHotels();
    this.getUserIdFromRoute();
  }

  public getUserIdFromRoute() {
    this.activatedRoute.params.subscribe(response => {
      this.userId = response['userId'];
    })
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
    console.log(userViewModel.name)

    this._userService.updateUser(this.userId, this.userViewModel).subscribe(response => {
      console.log('hit');
    })
  }

}