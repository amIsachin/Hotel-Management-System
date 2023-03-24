import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HotelEntity } from 'src/app/Entities/Hotel.Entity';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-all-hotels',
  templateUrl: './all-hotels.component.html',
  styleUrls: ['./all-hotels.component.css']
})
export class AllHotelsComponent implements OnInit {

  public hotelEntity: HotelEntity[] = [];
  public displayedColumns: string[] = ['Name', 'Rent par day', 'Maximum capacity', 'Created'];
  public dataSource:MatTableDataSource<HotelEntity> = new MatTableDataSource<HotelEntity>();

  constructor(public _hotelService: HotelService) { }

  ngOnInit(): void {
    this.getAllHotelsList();
  }

  /**
   * Get all hotels list.
   */
  public getAllHotelsList(): void {
    this._hotelService.getAllHotels().subscribe((response)=>{
      this.hotelEntity = response;
      this.dataSource = new MatTableDataSource<HotelEntity>(this.hotelEntity);
    });
  }

}