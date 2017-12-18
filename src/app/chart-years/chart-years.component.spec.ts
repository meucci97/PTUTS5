import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartYearsComponent } from './chart-years.component';

describe('ChartYearsComponent', () => {
  let component: ChartYearsComponent;
  let fixture: ComponentFixture<ChartYearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartYearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
