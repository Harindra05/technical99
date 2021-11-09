import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { HomeService } from 'src/app/home/home.service'

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @ViewChild(MatSidenav)
 sidenav!: MatSidenav;
  menu: any;
  activeMenu=0;
  activeStack=[];
  constructor(private observer: BreakpointObserver, private home: HomeService) { }

  ngOnInit(): void {
    this.home.getHeaderData().subscribe((data) => {
      this.menu = data;
      this.activeStack = data[0].languages;
      console.log(this.activeStack)
      });
  }
  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
  changeMenu(m){
    this.activeMenu = m;
    this.activeStack = this.menu[m].languages;
  }

}
