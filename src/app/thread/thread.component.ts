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

  threadsArray:any = [];
  threadArray:any = [];
  textValue: any = '';
  id:any;  

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
    // .doc(this.id)
    .valueChanges({ idField: 'id' })
    .subscribe(data => {
      console.log('data',data);;
      this.threadsArray = data;
       this.threadArray = this.threadsArray.filter(index => index.id === this.dataServ.serviceArray.id)
      //  console.log(this.threadsArray);
      // this.threadArray = this.dataServ.serviceArray.valueOf()
      console.log('valueof',this.threadArray);
      });
    }); 
  }
  
  sendMessage(){
    console.log('Hallo');
    
  }
}