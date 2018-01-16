import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts/posts.service';
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

  dataset = [
    { nb: 5, region: "Auvergne-Rhône-Alpes" },
    { nb: 10, region: "Bourgogne-Franche-Comté" },
    { nb: 14, region: "Bretagne" },
    { nb: 45, region: "Centre-Val de Loire" },
    { nb: 6, region: "Corse" },
    { nb: 25, region: "Grand Est" },
    { nb: 3, region: "Hauts-de-France" },
    { nb: 20, region: "Île-de-France" },
    { nb: 44, region: "Normandie" },
    { nb: 33, region: "Nouvelle-Aquitaine" },
    { nb: 7, region: "Pays de la Loire" },
    { nb: 12, region: "Provence-Alpes-Côte d'Azur" },
    { nb: 27, region: "Occitanie" }
];

  constructor(private _postService: PostsService) { }

  ngOnInit() {
    this._postService.getAccPieChart().subscribe((data: any[]) => {
      //this.accidents = data['data'];
      //console.log(this.accidents);
      //this.afficherPieChart();
    });

    this.afficherPieChart();
  }

  afficherPieChart() {
    var myValues=[];
    var myRegion=[];
    for(var i=0;i<this.dataset.length;i++){
      myValues.push(this.dataset[i]['nb']);
      myRegion.push(this.dataset[i]['region'])
    }

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
      .data(pie(myValues))
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
        return <any>d.data;
      });

    var legende = svg.selectAll(".legend")
      .data(pie(myRegion))
      .enter()
      .append("g")
      .attr("transform", function (d, i) {
        return "translate(" + (350) + "," + (i * 20 + 20) + ")";
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
      .attr("x", 15)
      .text(function (d) {
        return <any>d.data;
      });
  }

}
