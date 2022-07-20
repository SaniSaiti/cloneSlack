import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router, Event as NavigationEvent } from '@angular/router';
import { DataService } from '../Services/threadService';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


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
    .doc(this.id)
    .collection("thread")
    // .doc(this.id)
    .valueChanges({ idField: 'id' })
    .subscribe(data => {
      console.log('data',data)
      this.threadArray = data;
     
     this.threadsArray = this.dataServ.serviceArray.slice(-1);
      console.log('thresSrevec', this.threadsArray);
      
      // const values = Object.values(this.dataServ.serviceArray);
      // this.threadsArray = values;
  
      // this.threadsArray.push(this.dataServ.serviceArray);
      // this.threadArray = this.threadsArray.slice(-1);
      // console.log(this.threadArray);
      
      });
    }); 
  }
  
  sendMessage(){
    let result = this.textValue.replace(/<\/?p>/g, "");
    console.log(result);
    const  probetest = this.testArray;
    probetest.username = 'Sani';
    probetest.textMessage = result;

    console.log(probetest);
    
    this.firestore
    .collection("channel")
    .doc(this.id)
    .collection('thread')
    .add(probetest);
    this.textValue = '';
    
  }
}


