import { Component, Input, OnInit } from '@angular/core';
import { LeftSideService } from '../Services/lef-sideService';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    
 params!:any;
 @Input()  sidenavR:any;
 
 constructor(
  public service: LeftSideService
  ) { }

  ngOnInit(): void {
  
  }

 
 
  

}
