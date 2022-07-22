import { Component, OnInit } from '@angular/core';
import { LeftSideService } from '../Services/lef-sideService';



@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.scss']
})
export class RightSideComponent implements OnInit {

  constructor(
    public service: LeftSideService

  ) { }

  ngOnInit(): void {
   
   
}
}