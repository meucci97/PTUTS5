import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts/posts.service';
import * as d3 from "d3";

@Component({
  selector: 'app-infrastructures-chart',
  templateUrl: './infrastructures-chart.component.html',
  styleUrls: ['./infrastructures-chart.component.css']
})
export class InfrastructuresChartComponent implements OnInit {

  titre = "Infrastructures";

  width = 1000;
  height = 350;

  widthPieChart = 300;
  heightPieChart = 300;
  
  constructor(private _postService: PostsService) { }

  ngOnInit() {
  }

  onDataload(myData: Array<any>) {
    console.log(myData['durationDebut']);
    console.log(myData['durationFin']);
    
    this._postService.getAccDonutChart(myData['durationDebut'], myData['durationFin']).subscribe((data: any[]) => {
      this.afficherDonutChart(data);
    });

    console.log('MyGraph');
  }

  afficherDonutChart(data) {
    d3.selectAll("svg > *").remove();
    
    var myValues=[];
    var myRegions=[];
    for(var i=0;i<data.length;i++){
      myValues.push(data[i]['count']);
      myRegions.push(data[i]['label']);
    }
    console.log(myValues);
    console.log(myRegions);

    var svg = d3.select("svg")
      .attr("width", this.width)
      .attr("height", this.height);

    var outerRadius = this.heightPieChart / 2;
    var innerRadius = this.heightPieChart / 3;
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
      .data(pie(myRegions))
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
