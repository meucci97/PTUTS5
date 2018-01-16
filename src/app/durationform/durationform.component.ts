import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-periodeform',
  templateUrl: './durationform.component.html',
  styleUrls: ['./durationform.component.css']
})
export class DurationformComponent implements OnInit {

  DurationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.DurationForm = this.formBuilder.group({
      periodeDebut: '2012-01-01',
      periodeFin: '2017-01-01',
    });
  }

  sendData(formData) {
    console.log(formData);
  }

}
