import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../SharedComponents/common.service'
import { Location } from '@angular/common';
@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss']
})
export class LanguageListComponent implements OnInit {
  language;
  technologies;
  
  constructor(private router: Router, private common: CommonService, private location: Location) { }

  ngOnInit(): void {
    this.language=this.router.url.split('/')[1];
    if(this.language.includes('%20')){
      this.location.replaceState('/'+ this.language.replace(/%20/g, '-'));
     this.language = this.language.replace(/%20/g, ' ');

    }
    this.common.getTutorialTechnologies(1).subscribe((data)=>{
      this.technologies = Object.values(data)[0];
      console.log("NN"+ this.technologies)
    })

  }

}
