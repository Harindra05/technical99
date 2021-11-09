import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  menuData;
  constructor(private http: HttpClient) { }
  getHeaderData(){
    if(this.menuData==undefined){
      this.menuData =  this.http.post('http://64.227.185.247:9090/category/filter', {
        "filterSelection": {
            // "training":"Off"
        }
    });
    return this.menuData;

    }else{
     return this.menuData;
    }
    
  }
  getTrendingCourses(){
    return this.http.post('http://64.227.185.247:9091/training/filter', {
      "filterSelection": {
          // "training":"Off"
      }
  });
  }
  getTrendingCoursesByCategory(id){
    return this.http.post('http://64.227.185.247:9091/training/filter', {
      "filterSelection": {
        "categoryId":id
      }
  });
  }
  
}
