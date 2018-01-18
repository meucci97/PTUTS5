import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  routes = [
    {path: 'pie-chart', name: 'Accidents/Régions'},
    {path: 'nbAccidentsParPeriode', name: "Accidents/Période"},
    {path: 'nbAccidentsCumulParPeriode', name: 'Accidents Cummul/Période'},
    {path: 'nbAccidentHeure', name:"Accidents/Heure"},
    {path: 'nbAccidentCollision', name:"Accidents/Collision"},
    {path: 'nbAccidentsInfrastructures', name: "Accidents/Infrastructures"},
    {path: 'tri', name: "Résultat Tri"}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
