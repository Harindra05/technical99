import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url ='http://64.227.185.247:9090/category/filter';
  constructor(private http: HttpClient) {
   }
   getTutorialData(id){
     return this.http.post(this.url, {
         "filterSelection": {
        "moduleId":id+1,
        "langSize":5
    }
  } 
      );
   }
   getTotalModules(){
     return this.http.post('http://64.227.185.247:9090/module/filter/',{
      "filterSelection": {
        "training":"Off"
    }
});
   }
   getTutorialTechnologies(id){
     return this.http.post('http://64.227.185.247:9090/technology/filter/',{
      "filterSelection": {
          "langId":id
      }
  })
   }
   getTopics(id){
     return this.http.get('http://64.227.185.247:9090/topic/techId/'+id);
   }
   getPageLinks(id){
    return this.http.get('http://64.227.185.247:9092/tutorial/topicId/'+id)
   }

   //http://208.109.8.94:9092/tutorial/topicId/1
   getPage(id){
    return this.http.post('http://64.227.185.247:9092/tutorial/filter',
    {
      "filterSelection": {
         "pageId":id
      }
  }
    )
   }

}




