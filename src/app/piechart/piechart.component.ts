import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts/posts.service';
import * as d3 from "d3";

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  titre = "Régions";

  width = 1000;
  height = 500;

  widthPieChart = 500;
  heightPieChart = 500;

  constructor(private _postService: PostsService) { }

  ngOnInit() {
  }

  onDataload(myData: Array<any>) {
    this._postService.getAccPieChart(myData['durationDebut'], myData['durationFin']).subscribe((data: any[]) => {
      this.afficherPieChart(data);
    });
  }

  afficherPieChart(data) {
    d3.selectAll("svg > *").remove();
    
    var myValues=[];
    var myRegions=[];
    var cummul=0;
    for(var i=0;i<data.length;i++){
      cummul=cummul+data[i]['count'];
    }
    for(var i=0;i<data.length;i++){
      myValues.push(data[i]['count']);
      myRegions.push(data[i]['label']+" "+data[i]['count']+" sur "+cummul);
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
   
    var color = d3.scaleOrdinal(d3.schemeCategory20c);

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

    /*arcs.append("text")
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(<any>d) + ")";
      })
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .text(function (d) {
        return <any>d.data;
      });
*/
    var legende = svg.selectAll(".legend")
      .data(pie(myRegions))
      .enter()
      .append("g")
      .attr("transform", function (d, i) {
        return "translate(" + (600) + "," + (i * 20 + 20) + ")";
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
        console.log(d.data);return <any>d.data;
      });
  }

}
