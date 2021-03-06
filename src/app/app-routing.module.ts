import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {PiechartComponent} from './piechart/piechart.component';
import {Graph1BarChartComponent} from './graph1-bar-chart/graph1-bar-chart.component';
import {Graph5BarChartComponent} from './graph5-bar-chart/graph5-bar-chart.component';
import {InfrastructuresChartComponent} from './infrastructures-chart/infrastructures-chart.component';
import { HomeComponent } from './home/home.component';
import {Graph2LineChartComponent} from './graph2-line-chart/graph2-line-chart.component';
import {Graph3LineChartComponent} from './graph3-line-chart/graph3-line-chart.component';
import {TriViewComponent} from './tri-view/tri-view.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
  },
  {
    path: 'nbAccidentsParPeriode',
    component: Graph2LineChartComponent
  },
  {
    path: 'nbAccidentsCumulParPeriode',
    component: Graph3LineChartComponent
  },
  {
    path: 'tri',
    component: TriViewComponent
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
