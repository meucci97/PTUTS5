import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructuresChartComponent } from './infrastructures-chart.component';

describe('InfrastructuresChartComponent', () => {
  let component: InfrastructuresChartComponent;
  let fixture: ComponentFixture<InfrastructuresChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfrastructuresChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfrastructuresChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
