import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class LeftSideService{

  ChatName:string;
  constructor(){

 
   }


  ngOnInit() {
  
  }


  giveChatName(channelName:string){
    this.ChatName = channelName;
    
  }


       
}


