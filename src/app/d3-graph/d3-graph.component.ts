import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PostsService} from '../posts/posts.service';
import * as d3 from "d3";
import * as d3scale from "d3-scale";

@Component({
  selector: 'app-d3-graph',
  templateUrl: './d3-graph.component.html',
  styleUrls: ['./d3-graph.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class D3GraphComponent implements OnInit {

  titre = "D3 Graph";
  
  constructor(private _postService: PostsService) { }
  value: Array<any>;
  myArray : Array<any>;
  scaleDate: Array<any>;
  ngOnInit() {
    
    console.log("toto")
    this._postService.getAcc().subscribe((data : any[])=> {
      // Read the result field from the JSON response.
      this.value=data['data'];
      console.log(this.value);
      this.toto();
    });
  } 
  ngAfterViewInit() {
  
  }
  toto(){

    var colorLines = ["lightblue", "lightgreen", "yellow", "steelblue", "red"];
    this.scaleDate=[]
    this.myArray=[];
    for(var i=0;i< this.value.length;i++){
      this.myArray.push({"date": new Date(2016, 1, i), "nbacc":i});
      this.scaleDate.push(new Date(2016, 1, i));
    }
    console.log(this.myArray);
    var margin ={top: 40, right: 50, bottom: 50, left: 50},
    width =+((document.getElementById('graph').offsetWidth*0.95) - margin.left - margin.right),
    //width =+500 - margin.left - margin.right,
    height =+(600 - margin.top - margin.bottom);

    var data = [10, 20 ,30 ,15, 4, 26, 33];
    var svg=d3.select("svg")
    .attr("width", 1200)
    .attr("height", 1200)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    
    var g = svg.append("g")
    .attr("clip-path", "url(#clip)")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      var x = d3.scaleTime()
          .range([-1, width]);

      x.domain([
        d3.min(this.scaleDate),
        d3.max(this.scaleDate)
      ]);
      /*var x= d3.scaleLinear()
      .range([height, 0]);
*/    
      var yL = d3.scaleLinear()
          .range([height*1.3, 0]);

   /*   x.domain([
        d3.min(scaleDate),
        d3.max(scaleDate)
      ]);*/

      yL.domain([d3.min(this.myArray, function(d) {return d.nbacc}),d3.max(this.myArray, function(d) {return d.nbacc})]);

      var xAxis = d3.axisBottom(x);
  
      var yAxisLeft = d3.axisLeft(yL)
                  .ticks(10)
                  .tickSize(-width);
                  
      var gX = svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height+ ")")
        .call(xAxis);
      
      var gYL = svg.append("g")
        .attr("class", "axis axis--y")
        .call(yAxisLeft)
      
      svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("x", -5)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .style("fill", "#FFF")
        .style("font-size", "12px")
        .text("MW/h");

      var line_energy = d3.line()
      .x(function (d) {
        return x(d['date']);
      })
        .y(function (d) {
        return yL(d['nbacc']);
      });        
    

      g.append("defs")
      .append("clipPath")
      .attr("id", "clip")
      .append("rect")
        .attr("x",- margin.left)        // position the left of the rectangle
        .attr("y", - margin.top -margin.bottom )
        .attr("width", width)
        .attr("height", height+margin.bottom+margin.top);
    
    g.append("g")
        .attr("class", "charts")
        .attr("id", "monGraphEnergy")
       .append("path")
        .datum(this.myArray)
        .attr("fill", "none")
        .attr("stroke", colorLines[0])
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .attr("d", function(d) { return line_energy(d);
        });
    
  };
}
