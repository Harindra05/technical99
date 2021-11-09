import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service'
@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  constructor(private common: CommonService) { }
  data;
  totalModules;
  ativeModule=0;
  
  ngOnInit(): void {
    this.common.getTutorialData(this.ativeModule).subscribe((data) => {
      this.data = (data);
      console.log(this.data)
      });
    this.common.getTotalModules().subscribe((data)=>{
      this.totalModules = data;
      console.log(this.totalModules)
    })
    
  }
  getActiveModule(side,index,nextModuleID){
      if(side=='right'){
        this.ativeModule++;
        this.ngOnInit();
      }else if(side=='left'){
        this.ativeModule--;
        this.ngOnInit();
      }
  }


}
