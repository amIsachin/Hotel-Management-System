import { Component, OnInit } from '@angular/core';
import { HotelEntity } from 'src/app/Entities/Hotel.Entity';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public id:number = 0;
  public hotelEntity:HotelEntity[] = [];

  constructor (private _hotelService: HotelService) { }
   
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
}
