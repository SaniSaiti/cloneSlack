import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChannelComponent } from './channel/channel.component';
import { DirectMesseagesComponent } from './direct-messeages/direct-messeages.component';

import { ThreadComponent } from './thread/thread.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { SideComponent } from './side/side.component';

const routes: Routes = [
  { 
    path: 'signup', 
    component: SignupFormComponent 
  },

  { 
    path: 'login', 
    component: LoginFormComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },

  {
    path: 'side',
    component: SideComponent,
    children:
    [
      {  path:'channel/:id', component: ChannelComponent, }
      
    ]
  },

  {
    path: 'profile',
    component: ProfileComponent,
  },

  // {
  //    path: 'channel/:id',
  //    component: ChannelComponent,  
  // },
  
  {
    path: 'direct-messages',
    component: DirectMesseagesComponent,
  },
  {
    path: 'thread/:id',
    component: ThreadComponent,
    outlet:'thread'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
