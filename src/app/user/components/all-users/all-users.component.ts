import { DialogModule } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { UserDeleteDialogComponent } from 'src/app/Dialogs/user-delete-dialog/user-delete-dialog.component';
import { UserEntity } from 'src/app/Entities/User.Entity';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  
  public userEntity: UserEntity[] = [];
  public displayedColumns: string[] = ['Name', 'Gender', 'Age', 'Phone Number', 'City', 'From Date', 'Actions'];
  public dataSource: MatTableDataSource<UserEntity> = new MatTableDataSource<UserEntity>();

  constructor(private _userService: UserService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

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

  /**
   * Delete user
   * @param userId
   */
  public openDialog(userId:number) {
    let dialogRef = this.dialog.open(UserDeleteDialogComponent, {data: {name:userId}});

    dialogRef.afterClosed().subscribe(response => {
      if(response > 0) {
        this._userService.deleteUser(response).subscribe(response => {
          if (response === true){
            this.snackBar.open('User Deleted Succesfully', undefined, {duration:3000});
          }
          else {
            this.snackBar.open('Oosp\'s something went wrong!! please try again ', undefined, {duration:3000});
          }
        });
      }
      else {
        this.snackBar.open('User not Deleted', undefined, {duration:3000});
      }
    });
  }
}