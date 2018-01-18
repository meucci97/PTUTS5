import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  routes = [
    {path: 'd3-graph', name: 'Années'},
    {path: 'chart-bar', name: 'Bar Chart'},
    {path: 'pie-chart', name: 'Pie Chart'},
    {path: 'nbAccidentHeure', name:"Nombre d'accidents par heure"},
    {path: 'nbAccidentCollision', name:"Nombre d'accidents par type de Collision"},
    {path: 'nbAccidentsInfrastructures', name: "Accidents/Infrastructures"}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
