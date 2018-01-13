import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-periodeform',
  templateUrl: './periodeform.component.html',
  styleUrls: ['./periodeform.component.css']
})
export class PeriodeformComponent implements OnInit {

  PeriodeForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.PeriodeForm = this.formBuilder.group({
      periodeDebut: '',
      periodeFin: '',
    });
  }

  sendData(formData) {
    console.log(formData);
  }

}
