import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEntity } from '../Entities/User.Entity';
import { UserViewModel } from '../Entities/ViewModels/userViewModel';

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

  /**
   * Update user service.
   */
  public updateUser(userId:number, userViewModel: UserViewModel): Observable<boolean> {
    return this.httpClient.put<boolean>(this.baseUrl + 'api/user/UpdateUser/'+ userId, userViewModel);
  }



}
