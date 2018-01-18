import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {BarchartComponent} from './barchart/barchart.component';
import {ChartYearsComponent} from './chart-years/chart-years.component';
import {D3GraphComponent} from './d3-graph/d3-graph.component';
import {PiechartComponent} from './piechart/piechart.component';
import {Graph1BarChartComponent} from './graph1-bar-chart/graph1-bar-chart.component';
import {Graph5BarChartComponent} from './graph5-bar-chart/graph5-bar-chart.component';
import {InfrastructuresChartComponent} from './infrastructures-chart/infrastructures-chart.component';
const routes: Routes = [
  {
    path: 'd3-graph',
    component: D3GraphComponent
  },
  {
    path: 'chart-bar',
    component: BarchartComponent
  },
  {
    path: 'pie-chart',
    component: PiechartComponent
  },
  {
    path: 'nbAccidentHeure',
    component: Graph1BarChartComponent
  },
  {
    path: 'nbAccidentCollision',
    component: Graph5BarChartComponent
  },
  {
    path: 'nbAccidentsInfrastructures',
    component: InfrastructuresChartComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
