import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';
import { CommonService } from 'src/app/SharedComponents/common.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {

  constructor( private home: HomeService, private common: CommonService, private router: Router) {}
    ngOnInit(): void {
  
    }
}
