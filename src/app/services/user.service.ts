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

}
