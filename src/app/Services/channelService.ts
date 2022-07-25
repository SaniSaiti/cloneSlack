import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';




@Injectable({
  providedIn: 'root'
})
export class ChannelService{

  textValue: any = '';
  channelServiceId:any;
  isLoget:boolean = false;

  testArray:any = {
    username: '',
    textMessage: ''
  };

  constructor(
    public firestore: AngularFirestore,

  ){ }


  ngOnInit() {
  
  }


  sendMessage() {
    
       if(this.textValue.length > 0){
         let result = this.textValue.replace(/<\/?.+?>/g, "");
         console.log(result);
         const  probetest = this.testArray;
         probetest.username = 'Sani';
         probetest.textMessage = result;
         
         this.firestore
         .collection("channel")
         .doc(this.channelServiceId)
         .collection('message')
         .add(
           probetest
           )
         this.textValue = '';
       }else{
         console.log('textvalue', this.textValue);
            
       }
      
     }
   



       
}