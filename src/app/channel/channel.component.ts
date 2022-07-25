import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DataService } from '../Services/threadService';
import { ChannelService } from '../Services/channelService';


@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  id: any;
  messageArray: any[] = [];
  @Input() rThread:any;
  messageContainer:any;

  constructor(
    public serviceTr: DataService,
    private activRoute: ActivatedRoute,
    public firestore: AngularFirestore,
    public el: ElementRef, 
    public channelService: ChannelService
    // public renderer: Renderer
  ) { }

  ngOnInit() {
    this.activRoute.paramMap.subscribe((param) => {
      this.id = param.get('id')
      this.serviceTr.channelId = this.id;
      this.channelService.channelServiceId = this.id;


      this.firestore
        .collection("channel")
        .doc(this.id)
        .collection("message")
        .valueChanges({ idField: 'id' })
        .subscribe(
          (message) => {
            this.messageArray = message;
            this.serviceTr.threadID = message;
            console.log('messageArray', this.messageArray);
            
             
          });
    })
  }



  // Wird geändert über eine Allgemeine Funktion (Service/Model) für alles was im Firestore 
  // gespeichert wird Wie im Left Side Komponent Zeile 54 addToCollection(collectionName : string, data : any)

  //    sendMessage() {
//  console.log(this.textValue.lenght);
 
//     if(this.textValue.length > 0){
//       let result = this.textValue.replace(/<\/?.+?>/g, "");
//       console.log(result);
//       const  probetest = this.testArray;
//       probetest.username = 'Sani';
//       probetest.textMessage = result;
      
//       this.firestore
//       .collection("channel")
//       .doc(this.id)
//       .collection('message')
//       .add(
//         probetest
//         )
//       this.textValue = '';
//     }else{
//       console.log('textvalue', this.textValue);
         
//     }
   
//   }

//   public onChange( { editor }: ChangeEvent ) {
//     const data = editor.getData();

//     if(data.length > 0){
//       this.iconChangeColor = true;
//     }else{
//       this.iconChangeColor = false
//     }


// }
 


}
