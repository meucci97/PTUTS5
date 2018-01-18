import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3scale from 'd3-scale';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-graph5-bar-chart',
  templateUrl: './graph5-bar-chart.component.html',
  styleUrls: ['./graph5-bar-chart.component.css']
})
export class Graph5BarChartComponent implements OnInit {

  titre = "Collisions";
  
  onDataload(myData: Array<any>) {
    console.log(myData['durationDebut']);
    console.log(myData['durationFin']);
    this._postService.getBarChartGraph2(myData['durationDebut'], myData['durationFin']).subscribe((data: any[]) => {
      // Read the result field from the JSON response.
      this.chartStackNegativeCreate('chartStackedNegative', data);
    });

  }
  constructor(private _postService: PostsService) { }

  ngOnInit() {
  }

  chartStackNegativeCreate(chartStackNegative, dataSN){
    var categories=[];
    var myData=[];
    var tmp=new Array();
    for( var i = 0 ; i < dataSN.length; i++) {
      if(i==0){
        for(var j=0; j<dataSN[i]['data'].length;j++){
        categories.push(dataSN[i]['data'][j]['label']);
        }
      }
      tmp=new Array();
      tmp['label']=dataSN[i]['label'];
      for(var j=0; j<dataSN[i]['data'].length;j++){ 
        tmp[categories[j]]= dataSN[i]['data'][j]['count'];
      }
    myData.push(tmp);
    }
    d3.selectAll("svg > *").remove();
    var series = d3.stack()
        .keys(categories)
        .offset(d3.stackOffsetDiverging)
        (myData);
  
    
    var svgSN = d3.select('svg.'+chartStackNegative),
        marginSN = {top: 20, right: 30, bottom: 30, left: 60},
        widthSN = +1100,
        heightSN = +500;
  
    var xSN = d3.scaleBand()
        .domain(myData.map(function(d) { return d.label; }))
        .rangeRound([marginSN.left, widthSN - marginSN.right])
        .padding(0.1);
  
    var ySN = d3.scaleLinear()
        .domain([Number(d3.min(series, stackMin)), Number(d3.max(series, stackMax))])
        .rangeRound([heightSN - marginSN.bottom, marginSN.top]);
  
    var zSN = d3.scaleOrdinal(d3.schemeCategory10);
  
    svgSN.append('g')
      .selectAll('g')
      .data(series)
      .enter().append('g')
        .attr('fill', function(d) { return zSN(d.key); })
      .selectAll('rect')
      .data(function(d) { return d; })
      .enter().append('rect')
        .attr('width', xSN.bandwidth)
        .attr('x', function(d) { return xSN(String(d['data']['label'])) ; })
        .attr('y', function(d,i) { return ySN(d[1]); })
        .attr('height', function(d) { return Math.abs(ySN(d[0]) - ySN(d[1])); })
  
    svgSN.append('g')
        .attr('transform', 'translate(0,' + ySN(0) + ')')
        .call(d3.axisBottom(xSN));
  
    svgSN.append('g')
        .attr('transform', 'translate(' + marginSN.left + ',0)')
        .call(d3.axisLeft(ySN));
  
  
    var legend = svgSN.selectAll('.legend')
      .data(series)
      .enter().append('g')
      .attr("transform", function(d, i) { return "translate("+(350)+"," +( i * 20) + ")"; })
      .attr('class', 'legend');

    legend.append('rect')
      .attr('x', 700)
      .attr('y', function(d, i) { return i * 25 + 30 })
      .attr('width', 18)
      .attr('height', 18)
      .style('fill', function(d) { return zSN(d.key); });

    legend.append('text')
      .attr('x', 720)
      .attr('y', function(d, i) { return i * 25 +39; })
      .attr('dy', '.35em')
      .style('text-anchor', 'start')
      .style('fill', function(d) { return zSN(d.key); })
      .text(function(d, i) { return categories[i]; });

    function stackMin(serie) {
      return d3.min(serie, function(d) { return d[0]; });
    }

    function stackMax(serie) {
      return d3.max(serie, function(d) { return d[1]; });
    }
  }

}
