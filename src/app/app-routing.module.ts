import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from './channel/channel.component';
import { DirectMesseagesComponent } from './direct-messeages/direct-messeages.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'channel',
  },
  {
     path: 'channel/:id',
     component: ChannelComponent,
   },
   {
    path: 'direct-messages',
    component: DirectMesseagesComponent,
  },
  
 
  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  // },
  // {
  //   path: 'about',
  //   component: AboutComponent,
  // },
  // {
  //   path: 'help',
  //   component: HelpComponent,
  // },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },];
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
