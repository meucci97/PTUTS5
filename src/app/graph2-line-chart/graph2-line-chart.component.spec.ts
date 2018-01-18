import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graph2LineChartComponent } from './graph2-line-chart.component';

describe('Graph2LineChartComponent', () => {
  let component: Graph2LineChartComponent;
  let fixture: ComponentFixture<Graph2LineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graph2LineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graph2LineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
