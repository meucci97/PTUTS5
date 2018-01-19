import { Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { PostsService } from '../posts/posts.service';
@Component({
  selector: 'app-tri-view',
  templateUrl: './tri-view.component.html',
  styleUrls: ['./tri-view.component.css']
})
export class TriViewComponent implements OnInit {
  titre = 'Tri';
  LimitGroup: FormGroup;
  triSelect: String;
  triFusion: String;
  constructor(private formBuilder: FormBuilder , private _postService: PostsService) { }

  ngOnInit() {
    this.triSelect='';
    this.triFusion='';
    this.LimitGroup = this.formBuilder.group({
      limit: 10
    });
  }

  sendData(formData) {
    this._postService.getAccA(formData.limit).subscribe((data: any[]) => {
    console.log(data);
    this.triFusion='Vitesse Tri par fusion '+data['sortedTime']+'ms';
    console.log(this.triFusion);
    });
    this._postService.getAccB(formData.limit).subscribe((data: any[]) => {
      console.log(data);
      this.triSelect='Vitesse Tri par selection '+data['sortedTime']+'ms';
      console.log(this.triSelect);
      });
    
    }
}
