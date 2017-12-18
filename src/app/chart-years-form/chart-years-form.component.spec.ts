import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartYearsFormComponent } from './chart-years-form.component';

describe('ChartYearsFormComponent', () => {
  let component: ChartYearsFormComponent;
  let fixture: ComponentFixture<ChartYearsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartYearsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartYearsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
