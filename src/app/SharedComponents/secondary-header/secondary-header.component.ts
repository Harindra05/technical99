import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {HomeService} from 'src/app/home/home.service';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-secondary-header',
  templateUrl: './secondary-header.component.html',
  styleUrls: ['./secondary-header.component.scss']
})
export class SecondaryHeaderComponent implements OnInit {
  data: any;
  @Input() isHomePage;
  constructor( private home: HomeService, private common: CommonService, private router: Router) {}
   menu: any;
   
    ngOnInit(): void {
      if(this.isHomePage){
        this.home.getHeaderData().subscribe((data) => {
          this.menu = data;
          });
      }else{
        this.common.getTotalModules().subscribe((module)=>{
          this.data = module;
          console.log("TOTAL MODULE"+ this.data)
        })
      }
    
    }
}
