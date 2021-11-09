import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../SharedComponents/common.service';
@Component({
  selector: 'app-tutorial-main',
  templateUrl: './tutorial-main.component.html',
  styleUrls: ['./tutorial-main.component.scss']
})
export class TutorialMainComponent implements OnInit {
  panelOpenState: boolean = false;
  constructor(private common: CommonService) { }
  technology:any;
  topics: any;
  pages: any;
  pagedata: any;
  
  ngOnInit(): void {
    this.common.getTutorialTechnologies(1).subscribe((data)=>{
      this.technology =  Object.values(data)[0];
      console.log("TECHNOLOGY"+this.technology);
    })
    
    
  }
  getTopics(id){
    
      this.common.getTopics(id).subscribe((data)=>{
        this.pages=(data)
        console.log("TOPICS"+this.topics);
      })
    
    
  }
  getPageLinks(id){
    
    this.common.getPageLinks(id).subscribe((data)=>{
      this.pagedata = data;
      console.log(this.pagedata);
    })
  }

}
