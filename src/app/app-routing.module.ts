import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {BarchartComponent} from './barchart/barchart.component';
import {ChartYearsComponent} from './chart-years/chart-years.component';
const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'chart-years',
    component: ChartYearsComponent
  },
  {
    path: 'chart-bar',
    component: BarchartComponent
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
