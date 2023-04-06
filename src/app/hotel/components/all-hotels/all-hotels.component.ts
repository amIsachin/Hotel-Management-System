import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HotelEntity } from 'src/app/Entities/Hotel.Entity';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-all-hotels',
  templateUrl: './all-hotels.component.html',
  styleUrls: ['./all-hotels.component.css']
})
export class AllHotelsComponent implements OnInit {

  public hotelEntity: HotelEntity[] = [];
  public displayedColumns: string[] = ['Name', 'Rent par day', 'Maximum capacity', 'Created', 'Action'];
  public dataSource:MatTableDataSource<HotelEntity> = new MatTableDataSource<HotelEntity>();

  constructor(public _hotelService: HotelService, private router: Router, private _snackBar: MatSnackBar) { }

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

  /**
   * Delete hotel.
   */
  public deleteHotel(hotelId:number) {
    this._hotelService.deleteHotel(hotelId).subscribe(response => {
      if(response == true){
        this._snackBar.open('Hotel deleted succesfull', undefined, {duration: 3000});
        setTimeout(() => {
          this.router.navigateByUrl('/hotel');
        }, 4000);
      }
    })
  }

}