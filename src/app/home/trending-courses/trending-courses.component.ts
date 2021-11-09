import { Component, OnInit } from '@angular/core';

import { HomeService } from '../home.service';
@Component({
  selector: 'app-trending-courses',
  templateUrl: './trending-courses.component.html',
  styleUrls: ['./trending-courses.component.scss']
})
export class TrendingCoursesComponent implements OnInit {
  menus: any;
  trendingCourses;
  constructor(private home: HomeService) { }
  ngOnInit() {
    this.home.getTrendingCourses().subscribe((data)=>{
      this.trendingCourses = Object.values(data)[0];
    })
    this.home.getHeaderData().subscribe((data)=>{
      this.menus = data;
    })
  }
  changeCategory(id){
    this.home.getTrendingCoursesByCategory(id).subscribe((data)=>{
      this.trendingCourses =Object.values(data)[0];
      
    })
  }

  stars: number[] = [1, 2, 3, 4, 5];
}
