import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { AddChannelComponent } from '../add-channel/add-channel.component';



@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss']
})
export class LeftSideComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  
  constructor(
    public dialog: MatDialog,
   ) {    
  }

  ngOnInit(): void {
  
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddChannelComponent);

    dialogRef.afterClosed().subscribe((channelName: any) => {
      console.log('The dialog was closed', channelName);
      if (channelName && channelName.length > 0){
      // Wird später in Firestore gespeichert
      }      
    });
  }

  
}
