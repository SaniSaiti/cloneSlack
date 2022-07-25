import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ChannelService } from '../Services/channelService';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() sidenav:any;
  
  constructor(
    public router: Router,
    public tes: ChannelService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.tes.isLoget = false;
    this.router.navigate(['login']);
  }

}
