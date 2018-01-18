import { Component, OnInit,} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-tri-view',
  templateUrl: './tri-view.component.html',
  styleUrls: ['./tri-view.component.css']
})
export class TriViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sendData(formData) {
    console.log(formData);
    
  }
}
