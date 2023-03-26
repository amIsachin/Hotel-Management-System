import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserEntity } from 'src/app/Entities/User.Entity';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  
  public userEntity: UserEntity[] = [];
  public displayedColumns: string[] = ['Name', 'Gender', 'Age', 'Phone Number', 'City', 'From Date'];
  public dataSource: MatTableDataSource<UserEntity> = new MatTableDataSource<UserEntity>();

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  /**
   * Get all users.
   */
  public getAllUsers(): void {
    this._userService.getAllUsers().subscribe((response) => {
      this.userEntity = response;
      this.dataSource = new MatTableDataSource<UserEntity>(this.userEntity);
    })
  }
}