import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostsService } from '../posts/posts.service';
import * as d3 from 'd3';
import * as d3scale from 'd3-scale';

@Component({
  selector: 'app-graph3-line-chart',
  templateUrl: './graph3-line-chart.component.html',
  styleUrls: ['./graph3-line-chart.component.css']
})
export class Graph3LineChartComponent implements OnInit {
 
  titre = "Cummulé";
 
  onDataload(myData: Array<any>) {

    var years = new Array();

    if (myData['date2012']) {
      years.push(2012);
    };

    if (myData['date2013']) {
      years.push(2013);
    };

    if (myData['date2014']) {
      years.push(2014);
    };

    if (myData['date2015']) {
      years.push(2015);

    };

    if (myData['date2016']) {
      years.push(2016);
    };
    if (years.length != 0) {
      this._postService.getLineChartGraph1(myData['periodeDebut'], myData['periodeFin'], years).subscribe((data: any[]) => {
        this.drawGraph('chart', data);
      });
    }

  }

  constructor(private _postService: PostsService) { }
  ngOnInit() {
  }
  drawGraph(chartArea, myData) {

    var myDates = [];
    var values = [];
    var cumul=0;
    for (var i = 0; i < myData.length; i++) {
      cumul=0;
      for (var j = 0; j < myData[i]['data'].length; j++) {
        cumul=cumul+ myData[i]['data'][j]['count'];
        myData[i]['data'][j]['count']=cumul;
        myData[i]['data'][j]['label']=new Date(myData[i]['data'][j]['label']);
        myData[i]['data'][j]['label'].setFullYear(2018);
        //myData[i]['data'][j]['label'].setHours(myData[i]['data'][j]['label'].getUTCHours()+3);
        myDates.push(myData[i]['data'][j]['label']);
        values.push(myData[i]['data'][j]['count']);
      }
    }

    var marginA = { top: 40, right: 20, bottom: 130, left: 100 },
      marginA2 = { top: 600, right: 20, bottom: 30, left: 100 },
      widthA = +1000 - marginA.left - marginA.right,
      heightA = +700 - marginA.top - marginA.bottom,
      heightA2 = +700 - marginA2.top - marginA2.bottom;

    var svgA = d3.select('svg.' + chartArea)
      .attr('width', 1200)
      .attr('height', 1200)
      .attr('transform', 'translate(' + marginA.left + ',' + marginA.top + ')');

    var gA = svgA.append('g').attr('transform', 'translate(' + marginA.left + ',' + marginA.top + ')');

    d3.selectAll("svg > *").remove();
    var colorFill = d3.scaleOrdinal(d3.schemeCategory20);

    var xA = d3.scaleTime().range([0, widthA]);
    var yA = d3.scaleLinear().range([heightA, 0]);
    var xA2 = d3.scaleTime().range([0, widthA]);
    var yA2 = d3.scaleLinear().range([heightA2, 0]);


    var xAxis = d3.axisBottom(xA),
      xAxis2 = d3.axisBottom(xA2),
      yAxis = d3.axisLeft(yA);

    var brush = d3.brushX()
      .extent([[0, 0], [widthA, heightA2]])
      .on('brush end', function () {
        // tslint:disable-next-line:curly
        if (d3.event.sourceEvent && d3.event.sourceEvent.type === 'zoom') return; // ignore brush-by-zoom
        var s = d3.event.selection || xA2.range();
        xA.domain(s.map(xA2.invert, xA2));
        focus.selectAll('.line').attr('d', line);
        focus.selectAll('.axis--x').call(d3.axisBottom(xA));

      });

    var zoom = d3.zoom()
      .scaleExtent([1, 20])
      .translateExtent([[0, 0], [widthA, heightA]])
      .extent([[0, 0], [widthA, heightA]])
      .on("zoom", function () {
        if (d3.event.sourceEvent && d3.event.sourceEvent.type === "brush") return; // ignore zoom-by-brush
        var t = d3.event.transform;
        xA.domain(t.rescaleX(xA2).domain());
        focus.selectAll(".line").attr("d", line);
        focus.selectAll(".axis--x").call(d3.axisBottom(xA));
        context.selectAll(".brush").call(brush.move, xA.range().map(t.invertX, t));
      });

    var line = d3.line()
      .curve(d3.curveMonotoneX)
      .x(function (d) { return xA(d['label']); })
      .y(function (d) { return yA(d['count']); });
    // .y(function (d) { return yA((Object.values(d))[1]); });

    var line2 = d3.line()
      .curve(d3.curveMonotoneX)
      .x(function (d) { return xA2(d['label']); })
      .y(function (d) { return yA2(d['count']); });


    svgA.append('defs').append('clipPath')
      .attr('id', 'clip')
      .append('rect')
      .attr('width', widthA)
      .attr('height', heightA);

    var focus = svgA.append('g')
      .attr('class', 'focus')
      .attr('transform', 'translate(' + marginA.left + ',' + marginA.top + ')');

    var context = svgA.append('g')
      .attr('class', 'context')
      .attr('transform', 'translate(' + marginA2.left + ',' + marginA2.top + ')');

    xA.domain(d3.extent(myDates));
    // tslint:disable-next-line:max-line-length
    yA.domain([-5, Number(d3.max(values, function (d) { return d; }) + 10)]);
    xA2.domain(xA.domain());
    yA2.domain(yA.domain());

    for (var i = 0; i < myData.length; i++) {
      var lineFill = focus.append('path')
        .datum(myData[i]['data'])
        .attr('class', 'line linefocus')
        .attr('fill', 'none')
        .attr('stroke', colorFill(String(i)))
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('stroke-width', 1.5)
        .attr('d', line)
        .style('clip-path', 'url(#clip)');

      context.append('path')
        .datum(myData[i]['data'])
        .attr('class', 'line')
        .attr('fill', 'none')
        .attr('stroke', colorFill(String(i)))
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('stroke-width', 1.5)
        .attr('d', line2)
        .style('clip-path', 'url(#clip)');
    }

    focus.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + heightA + ')')
      .call(xAxis)
      .append('text')
      .attr('x', widthA + 20)
      .attr('y', 10)
      .style('fill', '#FFF')
      .style('font-size', '12px')
      .text('Date');

    focus.append('g')
      .attr('class', 'axis axis--y')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .style('fill', '#FFF')
      .style('font-size', '12px')
      .text('Availability');

    context.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + heightA2 + ')')
      .call(xAxis2);

    context.append('g')
      .attr('class', 'brush')
      .call(brush)
      .call(brush.move, xA.range());

    svgA.append("rect")
      .attr("class", "zoom")
      .attr("width", widthA)
      .attr("height", heightA)
      .attr("transform", "translate(" + marginA.left + "," + marginA.top + ")")
      .on('mouseout', function () { // on mouse out hide line, circles and text
        d3.selectAll(".mouse-per-line circle")
          .style("opacity", "0");
        d3.selectAll(".mouse-per-line text")
          .style("opacity", "0");
      })
      .on('mouseover', function () { // on mouse in show line, circles and text
        d3.selectAll(".mouse-per-line circle")
          .style("opacity", "1");
        d3.selectAll(".mouse-per-line text")
          .style("opacity", "1");
      })
      .style("cursor", "move")
      .style("fill", "none")
      .style("pointer-events", "all")
      .call(zoom);


    var legend = svgA.selectAll(".legend")
      .data(myData)
      .enter().append("g")
      .attr("class", "legend");

    for (var i = 0; i < myData.length; i++) {

      legend.append("rect")
        .attr("x", widthA + 125)
        .attr("y", i * 25 + 30)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", colorFill(String(i)));

      legend.append("text")
        .attr("x", widthA + 150)
        .attr("y", i * 25 + 39)
        .attr("dy", ".35em")
        .style("text-anchor", "start")
        .style("fill", colorFill(String(i)))
        .text(myData[i]['label']);
    }
  }

}
