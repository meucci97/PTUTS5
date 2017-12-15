import { Component, OnInit } from '@angular/core';
import {PostsService} from './posts.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private _postService: PostsService) { }
  value: Array<any>;
  ngOnInit() {
    console.log("toto")
    this._postService.getAllPosts().subscribe((data : any[])=> {
      // Read the result field from the JSON response.
      this.value=data['data'];
    });
    console.log(this.value);
    this._postService.sendParam().subscribe((data : any[])=> {
      // Read the result field from the JSON response.
      this.value=data['data'];
      console.log(this.value);
    });
  }

}
