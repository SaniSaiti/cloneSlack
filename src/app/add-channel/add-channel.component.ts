import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-channel',
  templateUrl: './add-channel.component.html',
  styleUrls: ['./add-channel.component.scss']
})
export class AddChannelComponent implements OnInit {

  channelName:string = '';

  constructor(
    public dialogRef: MatDialogRef<AddChannelComponent>,
    public dialog: MatDialog, 

  ) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }


}
