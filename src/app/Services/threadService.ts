import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  channelId:any;
  threadID:any;
  serviceArray:any = [];
  
  constructor(
    public firestore: AngularFirestore,
    private router: Router,) {
 
   }


  ngOnInit() {
    this.firestore
    .collection("channel")
    .doc(this.channelId)
    .collection("message")
    // .doc(this.threadID)
    .valueChanges({ idField: 'id' })
    .subscribe((message) => {
     console.log('Service', message); 
     console.log('ServiceArry', message); 
 
    });
  }


  openThreads(message:any) {
    this.router.navigate([{ outlets: { primary: 'channel/' + this.channelId, thread: 'thread/' + message.id } }]);
    this.serviceArray = message;  
    console.log(this.serviceArray);
       
}


}




