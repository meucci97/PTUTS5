import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  routes = [
    {path: 'pie-chart', name: 'Accidents/Regions'},
    {path: 'nbAccidentsParPeriode', name: "Accidents/Periode"},
    {path: 'nbAccidentsCumulParPeriode', name: 'Accidents Cummul/Periode'},
    {path: 'nbAccidentHeure', name:"Accidents/Heure"},
    {path: 'nbAccidentCollision', name:"Accidents/Collision"},
    {path: 'nbAccidentsInfrastructures', name: "Accidents/Infrastructures"}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
