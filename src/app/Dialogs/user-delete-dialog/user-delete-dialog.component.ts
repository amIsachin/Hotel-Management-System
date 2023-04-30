import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-delete-dialog',
  templateUrl: './user-delete-dialog.component.html',
  styleUrls: ['./user-delete-dialog.component.css']
})
export class UserDeleteDialogComponent {
  public notDeleted:boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
