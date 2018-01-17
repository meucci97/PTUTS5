import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graph5BarChartComponent } from './graph5-bar-chart.component';

describe('Graph5BarChartComponent', () => {
  let component: Graph5BarChartComponent;
  let fixture: ComponentFixture<Graph5BarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graph5BarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graph5BarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
