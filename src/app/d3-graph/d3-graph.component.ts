import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as d3 from "d3";
import * as d3scale from "d3-scale";

@Component({
  selector: 'app-d3-graph',
  templateUrl: './d3-graph.component.html',
  styleUrls: ['./d3-graph.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class D3GraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    var data = [10, 20 ,30 ,15, 4, 26, 33];
    d3.select(".chart")
        .selectAll("div")
        .data(data)
        .enter().append("div")
        .style("width", function(d) { return d*10 + "px"; })
        .text(function(d) { return d; });
}

}
