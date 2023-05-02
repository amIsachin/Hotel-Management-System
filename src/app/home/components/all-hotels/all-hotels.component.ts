import { Component, OnInit } from '@angular/core';
import { HotelEntity } from 'src/app/Entities/Hotel.Entity';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-all-hotels',
  templateUrl: './all-hotels.component.html',
  styleUrls: ['./all-hotels.component.css']
})
export class AllHotelsComponent implements OnInit {
  public hotelEntity:HotelEntity[]=[];

  constructor(private _hotelService: HotelService) { }

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
