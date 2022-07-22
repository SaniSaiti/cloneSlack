import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DataService } from '../Services/threadService';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';


@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  id: any;
  textValue: any;
  messageArray: any[] = [];
  chatId!: any;
  iconChangeColor:boolean = false;

  @Input() rThread:any;
 

  public editor = ClassicEditor;
  
  testArray:any = {
    username: '',
    textMessage: ''
  };

  constructor(
    public serviceTr: DataService,
    private activRoute: ActivatedRoute,
    public firestore: AngularFirestore,
    public el: ElementRef, 
    // public renderer: Renderer
  ) { }

  ngOnInit() {
    this.activRoute.paramMap.subscribe((param) => {
      this.id = param.get('id')
      this.serviceTr.channelId = this.id;


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

  // Wird geändert über eine Allgemeine Funktion (Service/Model) für alles was im Firestore 
  // gespeichert wird Wie im Left Side Komponent Zeile 54 addToCollection(collectionName : string, data : any)
  sendMessage() {
 console.log(this.textValue.lenght);
 
    if(this.textValue.length > 0){
      let result = this.textValue.replace(/<\/?.+?>/g, "");
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
    }else{
      console.log('textvalue', this.textValue);
         
    }
   
  }

  public onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();

    if(data.length > 0){
      this.iconChangeColor = true;
    }else{
      this.iconChangeColor = false
    }


}
  // scrollToBottom(): void {
  //   this.feedContainer.nativeElement.scrollTop
  //   = this.feedContainer.nativeElement.scrollHeight;
  // }

  // ngAfterViewChecked() {
  //   this.scrollToBottom();
  // }

}
