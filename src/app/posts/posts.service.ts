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

    getAccA(limit){
      return this.http.get("/api/accidents?sort=A&attrSort=DEPA&limit="+limit);
    }
    getAccB(limit){
      return this.http.get("/api/accidents?sort=B&attrSort=DEPA&limit="+limit);
    }

    getAccPieChart(dateStart, dateEnd) {
      return this.http.get("api/graph4", {
        params:new HttpParams().set('dateEnd', dateEnd).set('dateStart', dateStart),
      });
    }
    getBarChartGraph1(dateStart, dateEnd) {

      return this.http.get("api/graph1",{
       params:new HttpParams().set('dateEnd',dateEnd).set('dateStart', dateStart),    
      });
    }

    getBarChartGraph2(dateStart, dateEnd) {

      return this.http.get("api/graph5",{
        params:new HttpParams().set('dateEnd',dateEnd).set('dateStart', dateStart),    
       });
    }
    getLineChartGraph1(periodeStart,periodEnd,years){
      return this.http.get("api/graph2",{
        params:new HttpParams().set('monthEnd',periodEnd).set('monthStart', periodeStart).set('years',years),    
       });
    }

    getLineChartGraph2(periodeStart,periodEnd,years){
      return this.http.get("api/graph3",{
        params:new HttpParams().set('monthEnd',periodEnd).set('monthStart', periodeStart).set('years',years),    
       });
    }

    getAccDonutChart(dateStart, dateEnd) {
      return this.http.get("api/graph3", {
        params:new HttpParams().set('dateEnd', dateEnd).set('dateStart', dateStart),
      });
    }

    sendParam(){
      return this.http.get("/api/toto", { params: new HttpParams().set('id','3')})
    }
}
