import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelEntity } from 'src/app/Entities/Hotel.Entity';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent implements OnInit {

  public hotelId: number = 0;
  public hotelRecord:HotelEntity;

  constructor (private activatedRoute: ActivatedRoute, private _hotelService:HotelService) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.params.subscribe(response => {
      this.hotelId = response['hotelId'];
      console.log(this.hotelId)
      this._hotelService.getHotelByHotelId(this.hotelId).subscribe(response => {
        console.log(response)
      })

    }))
    
  }

}
