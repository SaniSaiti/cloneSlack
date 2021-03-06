import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { delay, filter } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatDialog } from '@angular/material/dialog';
import { AddChannelComponent } from '../add-channel/add-channel.component';
import { ChannelService } from '../Services/channelService';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';







@UntilDestroy()


@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {

  // @ViewChild(MatSidenav)
  // sidenav!: MatSidenav;

  
  // constructor(
    // private observer: BreakpointObserver, 
    // private router: Router,
    // public dialog: MatDialog,
  //  ) {    
  // }

  // ngOnInit(): void {
  
  // }



  title = 'cloneSlack';


  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  public editor = ClassicEditor;

  iconChangeColor:boolean = false;

  constructor(
    private observer: BreakpointObserver, 
    private router: Router,
    public dialog: MatDialog,
    public channelService: ChannelService,
    public el: ElementRef,
   ) {    
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.observer
    .observe(['(max-width: 925px)'])
    .pipe(delay(1), untilDestroyed(this))
    .subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });

  this.router.events
    .pipe(
      untilDestroyed(this),
      filter((e) => e instanceof NavigationEnd)
    )
    .subscribe(() => {
      if (this.sidenav.mode === 'over') {
        this.sidenav.close();
      }
    });
  }

  public onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();

    if(data.length > 0){
      this.iconChangeColor = true;
    }else{
      this.iconChangeColor = false
    }
}


  // ngAfterViewInit() {
  //   this.observer
  //   .observe(['(max-width: 800px)'])
  //   .pipe(delay(1), untilDestroyed(this))
  //   .subscribe((res) => {
  //     if (res.matches) {
  //       this.sidenav.mode = 'over';
  //       this.sidenav.close();
  //     } else {
  //       this.sidenav.mode = 'side';
  //       this.sidenav.open();
  //     }
  //   });

  // this.router.events
  //   .pipe(
  //     untilDestroyed(this),
  //     filter((e) => e instanceof NavigationEnd)
  //   )
  //   .subscribe(() => {
  //     if (this.sidenav.mode === 'over') {
  //       this.sidenav.close();
  //     }
  //   });
  // }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(AddChannelComponent);

  //   dialogRef.afterClosed().subscribe((channelName: any) => {
  //     console.log('The dialog was closed', channelName);
  //     if (channelName && channelName.length > 0){
  //     // Wird sp??ter in Firestore gespeichert
  //     }      
  //   });
  // }



}

