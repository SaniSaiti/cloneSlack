import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { ChannelService } from '../Services/channelService';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() sidenav:any;
  user$ = this.usersService.currentUserProfile$;

  constructor(
    public tes: ChannelService,
    private authService: AuthService,
    public usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // logout(){
  //   this.tes.isLoget = false;
  //   this.router.navigate(['login']);
  // }



  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }



}
