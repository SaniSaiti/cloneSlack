import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { AddChannelComponent } from '../add-channel/add-channel.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LeftSideService } from '../Services/lef-sideService';





@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss']
})
export class LeftSideComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  channelsArray: any[] = [];
  usersArray: any[] = [];



 
  constructor(
   public firestore: AngularFirestore,
   public dialog: MatDialog,
   public service: LeftSideService
   ) {    
  
  }

  ngOnInit(): void {

    this.firestore.collection('channel')
    .valueChanges({ idField: 'id' })
    .subscribe(channel => {
      this.channelsArray = channel;
      console.log(this.channelsArray);      
    })  


    this.firestore.collection('users')
    .valueChanges({ idField: 'id' })
    .subscribe(user => {
      console.log('user', user);  
      this.usersArray = user;    
    })  
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddChannelComponent);

    dialogRef.afterClosed().subscribe((channelName: any) => {
      console.log('The dialog was closed', channelName);
      if (channelName && channelName.length > 0){      
      this.addToCollection('channel', {channelName})
      
    }      
    });
  }

  addToCollection(collectionName : string, data : any){
    this.firestore.collection(collectionName)
    .add(data)
    .then(res => {
    console.log('rest',res);
    // this.router.navigateByUrl('/chats/' + chat.id) // Soll spöter direkt dieser Router erstellt werden
  
    })
    .catch(e => {
      console.log(e);
    })
  }


}
