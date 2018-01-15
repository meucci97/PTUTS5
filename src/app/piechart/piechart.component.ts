import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts/posts.service';
import * as d3 from "d3";

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  titre = "Pie Chart";
  
  width = 1000;
  height = 350;

  widthPieChart = 300;
  heightPieChart = 300;

  accidents: Array<any>;

  dataset = [5, 10, 20, 45, 6, 25, 3, 90, 44, 33, 7, 12, 27];

  regions = ["Auvergne-Rhône-Alpes",
    "Bourgogne-Franche-Comté",
    "Bretagne",
    "Centre-Val de Loire",
    "Corse",
    "Grand Est",
    "Hauts-de-France",
    "Île-de-France",
    "Normandie",
    "Nouvelle-Aquitaine",
    "Occitanie",
    "Pays de la Loire",
    "Provence-Alpes-Côte d'Azur"];

  constructor(private _postService: PostsService) { }

  ngOnInit() {
    this._postService.getAccPieChart().subscribe((data : any[])=> {
      //this.accidents = data['data'];
      //console.log(this.accidents);
      //this.afficherPieChart();
    });

    this.afficherPieChart();
  }

  afficherPieChart() {

    var svg = d3.select("svg")
      .attr("width", this.width)
      .attr("height", this.height);

    var outerRadius = this.heightPieChart / 2;
    var innerRadius = 0;
    var arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    var pie = d3.pie();

    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var arcs = svg.selectAll("g.arc")
      .data(pie(this.dataset))
      .enter()
      .append("g")
      .attr("class", "arc")
      .attr("transform", "translate(" + outerRadius + ", " + outerRadius + ")");

    arcs.append("path")
      .attr("fill", function (d, i) {
        return color(String(i));
      })
      .attr("d", <any>arc);

    arcs.append("text")
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(<any>d) + ")";
      })
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .text(function (d) {
        return d.value;
      });

    var legende = svg.selectAll(".legend")
      .data(pie(<any>this.regions))
      .enter()
      .append("g")
      .attr("transform", function (d, i) {
        return "translate(" + (350) + "," + (i * 15 + 40) + ")";
      })
      .attr("class", "legend");

    legende.append("rect")
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", function (d, i) {
        return color(String(i));
      });

    legende.append("text")
      .style("font-size", 15)
      .attr("y", 10)
      .attr("x", 11)
      .text(function (d) {
        return <any>d.data;
      });
  }

}
