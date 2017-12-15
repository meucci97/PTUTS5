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

    sendParam(){
      return this.http.get("/api/toto", { params: new HttpParams().set('id','3')})
    }
}