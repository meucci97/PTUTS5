import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  graphes = [
    {titre: 'Accidents/Régions', explication: "Ceci est l'étude", image: "test.png", lien: "pie-chart"},
    {titre: 'Graphe2', explication: "Ceci est l'étude", image: "test.png", lien: "pie-chart"},
    {titre: 'Graphe3', explication: "Ceci est l'étude", image: "test.png", lien: "pie-chart"},
    {titre: 'Graphe4', explication: "Ceci est l'étude", image: "test.png", lien: "pie-chart"},
    {titre: 'Graphe5', explication: "Ceci est l'étude", image: "test.png", lien: "pie-chart"},
    {titre: 'Graphe6', explication: "Ceci est l'étude", image: "test.png", lien: "pie-chart"}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
