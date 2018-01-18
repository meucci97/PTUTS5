import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graph3LineChartComponent } from './graph3-line-chart.component';

describe('Graph3LineChartComponent', () => {
  let component: Graph3LineChartComponent;
  let fixture: ComponentFixture<Graph3LineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graph3LineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graph3LineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
