import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideComponent } from './side/side.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatTreeModule} from '@angular/material/tree';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatDialogModule} from '@angular/material/dialog';
import { AddChannelComponent } from './add-channel/add-channel.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { RightSideComponent } from './right-side/right-side.component';
import { MainComponent } from './main/main.component';
import { ChannelComponent } from './channel/channel.component';
import { DirectMesseagesComponent } from './direct-messeages/direct-messeages.component';


import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { ThreadComponent } from './thread/thread.component';



@NgModule({
  declarations: [
    AppComponent,
    SideComponent,
    AddChannelComponent,
    ToolbarComponent,
    LeftSideComponent,
    RightSideComponent,
    MainComponent,
    ChannelComponent,
    DirectMesseagesComponent,
    ThreadComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTreeModule,
    CdkTreeModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
