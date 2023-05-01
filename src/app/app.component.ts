import { Component, OnInit } from '@angular/core';
import { HotelService } from './services/hotel.service';
import { HotelEntity } from './Entities/Hotel.Entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hotel-management-system';
  public opened:boolean = false;
  public name:string = 'Admin Panel';
  public hotelEntity: HotelEntity[]=[];

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


}
