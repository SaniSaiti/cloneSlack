import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  id:any;
  textValue:any = '';
  messageArray:any []= [];
  chatId!:any;
  public editor = ClassicEditor

  constructor(
    private router: Router,
    private activRoute: ActivatedRoute,
    public firestore: AngularFirestore,
  ) { }

  ngOnInit() {
    this.activRoute.paramMap.subscribe((param) =>{
      this.id = param.get('id')
      console.log('activeRoute', this.id);

      this.firestore
      .collection("channel")
      .doc(this.id)
      .collection("message")
      .valueChanges({idField: 'id'})
      .subscribe(
          (message) =>{
           this.messageArray = message;   
           console.log(this.messageArray);              
          });      
  })
}
  
  openThreads(message){
    console.log(message);
    
     this.router.navigate([{outlets: {primary: 'channel/:id' ,thread: 'thread/:id' + message}}]);    
  }

   // Wird geändert über eine Allgemeine Funktion (Service/Model) für alles was im Firestore 
  // gespeichert wird Wie im Left Side Komponent Zeile 54 addToCollection(collectionName : string, data : any)
  sendMessage(){
  
  this.firestore.collection("channel").doc(this.id).collection('message').add({
    username: 'Sani',
    textMessage: this.textValue, 
    
})
this.textValue = '' ;
}
  // scrollToBottom(): void {
  //   this.feedContainer.nativeElement.scrollTop
  //   = this.feedContainer.nativeElement.scrollHeight;
  // }

  // ngAfterViewChecked() {
  //   this.scrollToBottom();
  // }

}
