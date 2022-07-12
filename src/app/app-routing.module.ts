import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from './channel/channel.component';
import { SideComponent } from './side/side.component';

const routes: Routes = [
  {
     path: 'channel',
     component: ChannelComponent,
   },
  // {
  // //   path: '',
  // //   pathMatch: 'full',
  // //   redirectTo: 'side',
  // // },
  // {
  //   path: 'side',
  //   component: SideComponent,
  // },
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
