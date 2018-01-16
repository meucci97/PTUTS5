import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-durationform',
  templateUrl: './durationform.component.html',
  styleUrls: ['./durationform.component.css']
})
export class DurationformComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDataload = new EventEmitter<Array<any>>();

  DurationForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.DurationForm = this.formBuilder.group({
      durationDebut: '2012-01-01',
      durationFin: '2017-01-01',
    });
  }

  sendData(formData) {
    console.log('formualaire');
    console.log(formData);
    this.onDataload.emit(formData);
    }

}
