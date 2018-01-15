import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  routes = [
    {path: 'posts', name: 'Posts'},
    {path: 'd3-graph', name: 'Années'},
    {path: 'chart-bar', name: 'Bar Chart'},
    {path: 'pie-chart', name: 'Pie Chart'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
