import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {PostsComponent} from './posts/posts.component';
import {PostsService} from './posts/posts.service';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {D3GraphComponent} from './d3-graph/d3-graph.component';
import {ChartYearsComponent} from './chart-years/chart-years.component';
import {ChartYearsFormComponent} from './chart-years-form/chart-years-form.component';
import { BarchartComponent } from './barchart/barchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { DurationformComponent } from './durationform/durationform.component';
import { Graph1BarChartComponent } from './graph1-bar-chart/graph1-bar-chart.component';
import { Graph5BarChartComponent } from './graph5-bar-chart/graph5-bar-chart.component';
import { InfrastructuresChartComponent } from './infrastructures-chart/infrastructures-chart.component';
import { Graph2LineChartComponent } from './graph2-line-chart/graph2-line-chart.component';
import { HomeComponent } from './home/home.component';
import { Graph3LineChartComponent } from './graph3-line-chart/graph3-line-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavBarComponent,
    D3GraphComponent,
    ChartYearsComponent,
    ChartYearsFormComponent,
    BarchartComponent,
    PiechartComponent,
    DurationformComponent,
    Graph1BarChartComponent,
    Graph5BarChartComponent,
    InfrastructuresChartComponent,
    Graph2LineChartComponent,
    HomeComponent,
    Graph3LineChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule // Add routes to the app
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
