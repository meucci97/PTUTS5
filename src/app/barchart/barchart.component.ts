import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3scale from 'd3-scale';
import { PostsService } from '../posts/posts.service';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  dataSN = [{hour: "H1", France: 3840, Germany: 1920, Austria: -1960, Belgium: -400, Netherlands: 1600, Spain: 1440, Portugal: -960, Italy: -400, UK: -960, Switzerland: -400},
    {hour: "H2", France: 1600, Germany: 1440, Austria: -960, Belgium: -400, Netherlands:  320, Spain:  480, Portugal: -640, Italy: -400, UK: -1960, Switzerland: -400},
    {hour: "H3", France:  640, Germany:  960, Austria: -640, Belgium: -600, Netherlands: 3840, Spain: 1920, Portugal: -1960, Italy: -400, UK: -640, Switzerland: -400},
    {hour: "H4", France:  320, Germany:  480, Austria: -640, Belgium: -400, Netherlands:  640, Spain:  960, Portugal: -640, Italy: -600, UK: -640, Switzerland: -600},
    {hour: "H5", France: 3840, Germany: 1920, Austria: -1960, Belgium: -400, Netherlands: 1600, Spain: 1440, Portugal: -960, Italy: -400, UK: -960, Switzerland: -400},
    {hour: "H6", France: 1600, Germany: 1440, Austria: -960, Belgium: -400, Netherlands:  320, Spain:  480, Portugal: -640, Italy: -400, UK: -1960, Switzerland: -400},
    {hour: "H7", France:  640, Germany:  960, Austria: -640, Belgium: -600, Netherlands: 3840, Spain: 1920, Portugal: -1960, Italy: -400, UK: -640, Switzerland: -400},
    {hour: "H8", France:  320, Germany:  480, Austria: -640, Belgium: -400, Netherlands:  640, Spain:  960, Portugal: -640, Italy: -600, UK: -640, Switzerland: -600},
    {hour: 'H9', France: 3840, Germany: 1920, Austria: -1960, Belgium: -400, Netherlands: 1600, Spain: 1440, Portugal: -960, Italy: -400, UK: -960, Switzerland: -400},
    {hour: "H10", France: 1600, Germany: 1440, Austria: -960, Belgium: -400, Netherlands:  320, Spain:  480, Portugal: -640, Italy: -400, UK: -1960, Switzerland: -400},
    {hour: "H11", France:  640, Germany:  960, Austria: -640, Belgium: -600, Netherlands: 3840, Spain: 1920, Portugal: -1960, Italy: -400, UK: -640, Switzerland: -400},
    {hour: "H12", France:  320, Germany:  480, Austria: -640, Belgium: -400, Netherlands:  640, Spain:  960, Portugal: -640, Italy: -600, UK: -640, Switzerland: -600},
    {hour: "H13", France: 3840, Germany: 1920, Austria: -1960, Belgium: -400, Netherlands: 1600, Spain: 1440, Portugal: -960, Italy: -400, UK: -960, Switzerland: -400},
    {hour: "H14", France: 1600, Germany: 1440, Austria: -960, Belgium: -400, Netherlands:  320, Spain:  480, Portugal: -640, Italy: -400, UK: -1960, Switzerland: -400},
    {hour: "H15", France:  640, Germany:  960, Austria: -640, Belgium: -600, Netherlands: 3840, Spain: 1920, Portugal: -1960, Italy: -400, UK: -640, Switzerland: -400},
    {hour: "H16", France:  320, Germany:  480, Austria: -640, Belgium: -400, Netherlands:  640, Spain:  960, Portugal: -640, Italy: -600, UK: -640, Switzerland: -600},
    {hour: "H17", France: 1600, Germany: 1440, Austria: -960, Belgium: -400, Netherlands:  320, Spain:  480, Portugal: -640, Italy: -400, UK: -1960, Switzerland: -400},
    {hour: "H18", France:  640, Germany:  960, Austria: -640, Belgium: -600, Netherlands: 3840, Spain: 1920, Portugal: -1960, Italy: -400, UK: -640, Switzerland: -400},
    {hour: "H19", France:  320, Germany:  480, Austria: -640, Belgium: -400, Netherlands:  640, Spain:  960, Portugal: -640, Italy: -600, UK: -640, Switzerland: -600},
    {hour: "H20", France: 3840, Germany: 1920, Austria: -1960, Belgium: -400, Netherlands: 1600, Spain: 1440, Portugal: -960, Italy: -400, UK: -960, Switzerland: -400},
    {hour: "H21", France: 1600, Germany: 1440, Austria: -960, Belgium: -400, Netherlands:  320, Spain:  480, Portugal: -640, Italy: -400, UK: -1960, Switzerland: -400},
    {hour: "H22", France:  640, Germany:  960, Austria: -640, Belgium: -600, Netherlands: 3840, Spain: 1920, Portugal: -1960, Italy: -400, UK: -640, Switzerland: -400},
    {hour: "H23", France:  320, Germany:  480, Austria: -640, Belgium: -400, Netherlands:  640, Spain:  960, Portugal: -640, Italy: -600, UK: -640, Switzerland: -600},
    {hour: "H24", France: 3840, Germany: 1920, Austria: -1960, Belgium: -400, Netherlands: 1600, Spain: 1440, Portugal: -960, Italy: -400, UK: -960, Switzerland: -400}
  ];

  countries = ["France", "Germany", "Austria", "Belgium", "Netherlands", 'Spain', 'Portugal', 'Italy', 'UK', 'Switzerland'];

  onDataload(myData: Array<any>) {
    console.log(myData['durationDebut']);
    console.log(myData['durationFin']);
    this._postService.getBarChart(myData['durationDebut'], myData['durationFin']).subscribe((data: any[]) => {
      // Read the result field from the JSON response.
      console.log("yes");
      console.log(data);
      this.chartStackNegativeCreate('chartStackedNegative', data, this.countries);
    });
    console.log('MyGraph');
    console.log(myData);
  }

  constructor(private _postService: PostsService) { }
 
  ngOnInit() {
    //this.chartStackNegativeCreate('chartStackedNegative', this.dataSN, this.countries);
  }

  chartStackNegativeCreate(chartStackNegative, dataSN, countries){
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
          console.log(tmp);
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
          widthSN = +1000,
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
          .attr('y', function(d,i) { console.log(d[1]+" "+ySN(d[1])); return ySN(d[1]); })
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
