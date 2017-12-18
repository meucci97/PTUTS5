import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-chart-years-form',
  templateUrl: './chart-years-form.component.html',
  styleUrls: ['./chart-years-form.component.css']
})
export class ChartYearsFormComponent implements OnInit {

  chartYearsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  periodes = [
    {id: 1, name: 'Janvier', value: 'janvier'},
    {id: 2, name: 'Février', value: 'fevrier'},
    {id: 3, name: 'Mars', value: 'mars'},
    {id: 4, name: 'Avril', value: 'avril'},
    {id: 5, name: 'Mai', value: 'mai'},
    {id: 6, name: 'Juin', value: 'juin'},
    {id: 7, name: 'Juillet', value: 'juillet'},
    {id: 8, name: 'Août', value: 'aout'},
    {id: 9, name: 'Septembre', value: 'septembre'},
    {id: 10, name: 'Octobre', value: 'octobre'},
    {id: 11, name: 'Novembre', value: 'novembre'},
    {id: 12, name: 'Décembre', value: 'decembre'},
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
      periodeDebut: 'janvier',
      periodeFin: 'janvier',
      date2012: false,
      date2013: false,
      date2014: false,
      date2015: false,
      date2016: false
    });
  }

  sendData(formData) {
    console.log(formData);
  }

}
