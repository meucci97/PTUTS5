import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostsService } from '../posts/posts.service';
import * as d3 from 'd3';
import * as d3scale from 'd3-scale';

@Component({
  selector: 'app-d3-graph',
  templateUrl: './d3-graph.component.html',
  styleUrls: ['./d3-graph.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class D3GraphComponent implements OnInit {

  titre = 'D3 Graph';

  constructor(private _postService: PostsService) { }
  value: Array<any>;
  myArray: Array<any>;
  scaleDate: Array<any>;
  ngOnInit() {

    console.log('toto');
    this._postService.getAcc().subscribe((data: any[]) => {
      // Read the result field from the JSON response.
      this.value = data['data'];
      console.log(this.value);
      console.log(new Date(2018, 1, 29));
      console.log('test');
      console.log(this.tableTest2);
      //this.toto();
      this.drawGraph('chart', this.tableTest2, this.tableAnne);
    });
  }
  ngAfterViewInit() {

  }
  toto() {

    var colorLines = ['lightblue', 'lightgreen', 'yellow', 'steelblue', 'red'];
    this.scaleDate = []
    this.myArray = [];
    for (var i = 0; i < this.value.length; i++) {
      this.myArray.push({ 'date': new Date(2018, 0, (i + 1)), 'nbacc': i });
      this.scaleDate.push(new Date(2018, 0, (i + 1)));
    }

    console.log(this.myArray);
    var margin = { top: 40, right: 50, bottom: 50, left: 50 },
      width = +((document.getElementById('graph').offsetWidth) - margin.left - margin.right),
      //width =+500 - margin.left - margin.right,
      height = +(600 - margin.top - margin.bottom);


    var svg = d3.select('svg')
      .attr('width', 1200)
      .attr('height', 1200)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


    var g = svg.append('g')
      .attr('clip-path', 'url(#clip)')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

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
      .range([height * 1.3, 0]);

    /*   x.domain([
         d3.min(scaleDate),
         d3.max(scaleDate)
       ]);*/

    yL.domain([d3.min(this.myArray, function (d) { return d.nbacc }), d3.max(this.myArray, function (d) { return d.nbacc })]);

    var xAxis = d3.axisBottom(x);

    var yAxisLeft = d3.axisLeft(yL)
      .ticks(10)
      .tickSize(-width);

    var gX = svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis);

    var gYL = svg.append('g')
      .attr('class', 'axis axis--y')
      .call(yAxisLeft)

    svg.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('x', -5)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .style('fill', '#00000')
      .style('font-size', '12px')
      .text('MW/h');

    let line_energy = d3.line()
      .x(function (d) {
        return x(d['date']);
      })
      .y(function (d) {
        return yL(d['nbacc']);
      });


    g.append('defs')
      .append('clipPath')
      .attr('id', 'clip')
      .append('rect')
      .attr('x', - margin.left)        // position the left of the rectangle
      .attr('y', - margin.top - margin.bottom)
      .attr('width', width)
      .attr('height', height + margin.bottom + margin.top);

    g.append('g')
      .attr('class', 'charts')
      .attr('id', 'monGraphEnergy')
      .append('path')
      .datum(this.myArray)
      .attr('fill', 'none')
      .attr('stroke', colorLines[0])
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', 1.5)
      .attr('d', function (d) {
        return line_energy(d);
      });

  }
  // tslint:disable-next-line:member-ordering
  tableAnne = [2015, 2016];
  tableTest2 = [{
    annee: '2015', donnees: [{
      jour: (new Date(2018, 0, (1))),
      nb: 10
    },
    {
      jour: (new Date(2018, 0, (2))),
      nb: 20
    },
    {
      jour: (new Date(2018, 0, (3))),
      nb: 20
    },
    {
      jour: (new Date(2018, 0, (4))),
      nb: 40
    },
    {
      jour: (new Date(2018, 0, (5))),
      nb: 50
    },
    {
      jour: (new Date(2018, 0, (6))),
      nb: 70
    }
    ]
  }, {
    annee: '2016', donnees: [{
      jour: (new Date(2018, 0, (1))),
      nb: 0
    },
    {
      jour: (new Date(2018, 0, (2))),
      nb: 15
    },
    {
      jour: (new Date(2018, 0, (3))),
      nb: 35
    },
    {
      jour: (new Date(2018, 0, (4))),
      nb: 50
    },
    {
      jour: (new Date(2018, 0, (5))),
      nb: 60
    },
    {
      jour: (new Date(2018, 0, (6))),
      nb: 60
    }
    ]
  }
  ];

  tableTest = [{
    jour: (new Date(2018, 0, (1))), annees: [{
      annee: '2015', nb: 10
    }, { annee: '2016', nb: 20 }]
  },
  {
    jour: (new Date(2018, 0, (2))), annees: [{
      annee: '2015', nb: 20
    }, { annee: '2016', nb: 30 }]
  },
  {
    jour: (new Date(2018, 0, (3))), annees: [{
      annee: '2015', nb: 20
    }, { annee: '2016', nb: 30 }]
  },
  {
    jour: (new Date(2018, 0, (4))), annees: [{
      annee: '2015', nb: 35
    }, { annee: '2016', nb: 35 }]
  },
  {
    jour: (new Date(2018, 0, (5))), annees: [{
      annee: '2015', nb: 50
    }, { annee: '2016', nb: 40 }]
  },
  {
    jour: (new Date(2018, 0, (6))), annees: [{
      annee: '2015', nb: 55
    }, { annee: '2016', nb: 50 }]
  },
  {
    jour: (new Date(2018, 0, (7))), annees: [{
      annee: '2015', nb: 60
    }, { annee: '2016', nb: 65 }]
  }];

  drawGraph(chartArea, myData, leggend) {

    var myDates = [];
    var values = [];
    console.log("tttt");
    console.log(myData[0]['donnees'].length);
    for (var i = 0; i < myData.length; i++) {
      for (var j = 0; j < myData[i]['donnees'].length; j++) {
        myDates.push(myData[i]['donnees'][j]['jour']);
        values.push(myData[i]['donnees'][j]['nb']);
      }
    }

    console.log(myDates);
    var marginA = { top: 40, right: 20, bottom: 130, left: 100 },
      marginA2 = { top: 700, right: 20, bottom: 30, left: 100 },
      widthA = +1000 - marginA.left - marginA.right,
      heightA = +800 - marginA.top - marginA.bottom,
      heightA2 = +800 - marginA2.top - marginA2.bottom;

    var svgA = d3.select('svg.' + chartArea)
      .attr('width', 1200)
      .attr('height', 1200)
      .attr('transform', 'translate(' + marginA.left + ',' + marginA.top + ')');

    var gA = svgA.append('g').attr('transform', 'translate(' + marginA.left + ',' + marginA.top + ')');

    var colorFill = d3.scaleOrdinal(d3.schemeCategory20);

    var xA = d3.scaleTime().range([0, widthA]);
    var yA = d3.scaleLinear().range([heightA, 0]);
    var xA2 = d3.scaleTime().range([0, widthA]);
    var yA2 = d3.scaleLinear().range([heightA2, 0]);


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
      .scaleExtent([1, Infinity])
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
      .x(function (d) { return xA(d['jour']); })
      .y(function (d) { return yA(d['nb']); });
    // .y(function (d) { return yA((Object.values(d))[1]); });

    var line2 = d3.line()
      .curve(d3.curveMonotoneX)
      .x(function (d) { return xA2(d['jour']); })
      .y(function (d) { return yA2(d['nb']); });
    // .y(function (d) { return yA2((Object.values(d))[1]); });

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
    yA.domain([-5, Number(d3.max(values, function (d) { return d; }))]);
    xA2.domain(xA.domain());
    yA2.domain(yA.domain());

    for (var i = 0; i < myData.length; i++) {
      var lineFill = focus.append('path')
        .datum(myData[i]['donnees'])
        .attr('class', 'line linefocus')
        .attr('fill', 'none')
        .attr('stroke', colorFill(String(i)))
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('stroke-width', 1.5)
        .attr('d', line)
        .style('clip-path', 'url(#clip)');

      context.append('path')
        .datum(myData[i]['donnees'])
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
      .on('mouseout', function() { // on mouse out hide line, circles and text
        d3.selectAll(".mouse-per-line circle")
          .style("opacity", "0");
        d3.selectAll(".mouse-per-line text")
          .style("opacity", "0");
      })
      .on('mouseover', function() { // on mouse in show line, circles and text
        d3.selectAll(".mouse-per-line circle")
          .style("opacity", "1");
        d3.selectAll(".mouse-per-line text")
          .style("opacity", "1");
      })
      .style("cursor", "move")
      .style("fill", "none")
      .style("pointer-events", "all")
      .call(zoom);
    

      console.log(svgA);
      var legend = svgA.selectAll(".legend")
      .data(myData)
      .enter().append("g")
      .attr("class", "legend");
  
    for(var i = 0; i<myData.length; i++){
  
      legend.append("rect")
        .attr("x", widthA+100)
        .attr("y", i * 25 + 30)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", colorFill(String(i)));
  
      legend.append("text")
        .attr("x", widthA+125)
        .attr("y", i * 25 + 39)
        .attr("dy", ".35em")
        .style("text-anchor", "start")
        .style("fill",colorFill(String(i)) )
        .text(myData[i]['annee']);
    }
  }

}
