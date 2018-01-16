import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graph1BarChartComponent } from './graph1-bar-chart.component';

describe('Graph1BarChartComponent', () => {
  let component: Graph1BarChartComponent;
  let fixture: ComponentFixture<Graph1BarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graph1BarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graph1BarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
