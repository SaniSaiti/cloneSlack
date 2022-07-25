import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { LeftSideService } from '../Services/lef-sideService';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
 
  @ViewChild('scroller') private feedContainer: ElementRef;
 params!:any;
 @Input()  sidenavR:any;
 
 constructor(
  public service: LeftSideService
  ) { }

  ngOnInit(): void {
  
  }


  scrollToBottom(): void {
    this.feedContainer.nativeElement.scrollTop
    = this.feedContainer.nativeElement.scrollHeight;
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
 

}
