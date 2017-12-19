import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  routes = [
    {path: 'posts', name: 'Posts'},
    {path: 'chart-years', name: 'Années'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
