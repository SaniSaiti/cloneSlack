import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DataService } from '../Services/threadService';


@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  id: any;
  textValue: any = '';
  messageArray: any[] = [];
  chatId!: any;

  @Input() rThread:any;
 

  public editor = ClassicEditor;
  
  testArray:any = {
    username: '',
    textMessage: ''
  };

  constructor(
    public serviceTr: DataService,
    private router: Router,
    private activRoute: ActivatedRoute,
    public firestore: AngularFirestore,
  ) { }

  ngOnInit() {
    this.activRoute.paramMap.subscribe((param) => {
      this.id = param.get('id')
      this.serviceTr.channelId = this.id;
      console.log('dataSrv',this.serviceTr.channelId);


      this.firestore
        .collection("channel")
        .doc(this.id)
        .collection("message")
        .valueChanges({ idField: 'id' })
        .subscribe(
          (message) => {
            this.messageArray = message;
            this.serviceTr.threadID = message;
             
          });
    })
  }

  // openThreads(message:any) {
  //   this.router.navigate([{ outlets: { primary: 'channel/' + this.id, thread: 'thread/' + message.id } }]);
   
  // }

  // Wird geändert über eine Allgemeine Funktion (Service/Model) für alles was im Firestore 
  // gespeichert wird Wie im Left Side Komponent Zeile 54 addToCollection(collectionName : string, data : any)
  sendMessage() {
    let result = this.textValue.replace(/<\/?p>/g, "");
    console.log(result);
    const  probetest = this.testArray;
    probetest.username = 'Sani';
    probetest.textMessage = result;
    
    this.firestore
    .collection("channel")
    .doc(this.id)
    .collection('message')
    .add(
      probetest
      )
    this.textValue = '';
  }
  // scrollToBottom(): void {
  //   this.feedContainer.nativeElement.scrollTop
  //   = this.feedContainer.nativeElement.scrollHeight;
  // }

  // ngAfterViewChecked() {
  //   this.scrollToBottom();
  // }

}
