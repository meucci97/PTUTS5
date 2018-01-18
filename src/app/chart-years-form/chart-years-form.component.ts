import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-chart-years-form',
  templateUrl: './chart-years-form.component.html',
  styleUrls: ['./chart-years-form.component.css']
})
export class ChartYearsFormComponent implements OnInit {
  @Output() onDataload = new EventEmitter<Array<any>>();
  chartYearsForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {

  }

  periodes = [
    {id: 1, name: 'Janvier', value: '1'},
    {id: 2, name: 'Février', value: '2'},
    {id: 3, name: 'Mars', value: '3'},
    {id: 4, name: 'Avril', value: '4'},
    {id: 5, name: 'Mai', value: '5'},
    {id: 6, name: 'Juin', value: '6'},
    {id: 7, name: 'Juillet', value: '7'},
    {id: 8, name: 'Août', value: '8'},
    {id: 9, name: 'Septembre', value: '9'},
    {id: 10, name: 'Octobre', value: '10'},
    {id: 11, name: 'Novembre', value: '11'},
    {id: 12, name: 'Décembre', value: '12'},
  ];

  annees = [
    {id: 1, value: '2012'},
    {id: 2, value: '2013'},
    {id: 3, value: '2014'},
    {id: 4, value: '2015'},
    {id: 5, value: '2016'}
  ];

  ngOnInit() {
    this.chartYearsForm = this.formBuilder.group({
      periodeDebut: '1',
      periodeFin: '2',
      date2012: false,
      date2013: false,
      date2014: false,
      date2015: false,
      date2016: false
    });
  }

  sendData(formData) {
    console.log(formData);
    this.onDataload.emit(formData);
  }

}
