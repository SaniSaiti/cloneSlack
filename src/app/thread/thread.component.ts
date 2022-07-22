import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router, Event as NavigationEvent } from '@angular/router';
import { DataService } from '../Services/threadService';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';


@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {

  threadsArray: any = [];
  threadArray: any  = [];
  textValue: any = '';
  id:any;  
  iconChangeColor:boolean = false;

  testArray:any = {
    username: '',
    textMessage: ''
  };

  public editor = ClassicEditor;

 
  constructor(
    public firestore: AngularFirestore,
    private activRoute: ActivatedRoute,
    public router: Router,
     public dataServ: DataService
   ) {}

  ngOnInit(): void {
   
   

    this.activRoute.paramMap.subscribe((param) => {
    this.id = param.get('id')

  
    
    this.firestore
    .collection("channel")
    .doc(this.dataServ.channelId)
    .collection("message")
    .doc(this.id)
    .collection("thread")
    .valueChanges({ idField: 'id' })
    .subscribe(data => {
      console.log('data',data)
      this.threadArray = data;
     
    //  this.threadsArray = this.dataServ.serviceArray.slice(-1);
    //   console.log('thresSrevec', this.threadsArray);
      
      });
    }); 
  }
  
  sendMessage(){
    
    if(this.textValue.length > 0){
    let result = this.textValue.replace(/<\/?.+?>/g, "");
    console.log(result);
    const  probetest = this.testArray;
    probetest.username = 'Sani';
    probetest.textMessage = result;

    console.log(probetest);
    
    this.firestore
    .collection("channel")
    .doc(this.dataServ.channelId)
    .collection('message')
    .doc(this.id)
    .collection('thread')
    .add(probetest);
    this.textValue = '';
    }else{
      console.log('HEllo');
      
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


}


