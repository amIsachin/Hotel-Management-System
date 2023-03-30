import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelEntity } from '../Entities/Hotel.Entity';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private readonly baseUrl = 'https://localhost:44350/';

  constructor(private _httpClient: HttpClient) { }

  /**
   * Get all hotels list functionaltiy.
   */
  public getAllHotels(): Observable<HotelEntity[]> {
    return this._httpClient.get<HotelEntity[]>(this.baseUrl + 'api/hotel/GetAllHotels')
  }

  /**
   *  Add New hotel functionality.
   */
  public addNewHotel(hotelEntity:HotelEntity): Observable<boolean> {
    return this._httpClient.post<boolean>(this.baseUrl + 'api/hotel/AddNewHotel', hotelEntity);
  }

}
