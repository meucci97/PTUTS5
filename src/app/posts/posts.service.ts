import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PostsService {
  
  constructor(private http: HttpClient) { }
  
    getAllPosts(){
      return this.http.get("/api/posts");
    }

    getAcc(){
      return this.http.get("/api/accidents");
    }

    getAccPieChart(dateStart, dateEnd) {
      console.log("api/graph4?dateEnd=" + dateEnd + "&dateStart=" + dateStart);
      return this.http.get("api/graph4?dateEnd=" + dateEnd + "&dateStart=" + dateStart);
    }
    getBarChartGraph1(dateStart, dateEnd) {
      console.log(dateStart);
      console.log(dateEnd);
      console.log("api/graph1?dateEnd="+dateEnd+"&dateStart="+dateStart);
      return this.http.get("api/graph1",{
       params:new HttpParams().set('dateEnd',dateEnd).set('dateStart', dateStart),    
      });
    }

    getBarChartGraph2(dateStart, dateEnd) {
      console.log(dateStart);
      console.log(dateEnd);
      console.log("api/graph1?dateEnd="+dateEnd+"&dateStart="+dateStart);
      return this.http.get("api/graph5",{
        params:new HttpParams().set('dateEnd',dateEnd).set('dateStart', dateStart),    
       });
    }
    getLineChartGraph1(periodeStart,periodEnd,years){
      console.log(periodeStart);
      console.log(periodEnd);
      console.log(years)
      return this.http.get("api/graph2",{
        params:new HttpParams().set('monthEnd',periodEnd).set('monthStart', periodeStart).set('years',years),    
       });
    }

    sendParam(){
      return this.http.get("/api/toto", { params: new HttpParams().set('id','3')})
    }
}
