import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEntity } from '../Entities/User.Entity';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl = 'https://localhost:44350/';

  constructor(private httpClient: HttpClient) { }

  /**
   * Fetch all user functionality.
   */
  public getAllUsers(): Observable<UserEntity[]> {
    return this.httpClient.get<UserEntity[]>(this.baseUrl + 'api/user/getallusers');
  }

  /**
   * Add user service.
   */
  public addStudent(userEntity:UserEntity): Observable<boolean>{
    return this.httpClient.post<boolean>(this.baseUrl + 'api/user/NewUser/',userEntity);
  }

  public test(user:any): Observable<boolean> {
    const vm:any = {
      name:user.name,
      gender:user.gender,
      age:user.age,
      phoneNumber:user.phoneNumber,
      city:user.city,
      fromDate:user.fromDate,
      hotelId:user.hotelId,
      created:user.created
    }
    return this.httpClient.post<boolean>(this.baseUrl + 'api/user/Test/',vm);
  }

}
