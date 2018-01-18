import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriViewComponent } from './tri-view.component';

describe('TriViewComponent', () => {
  let component: TriViewComponent;
  let fixture: ComponentFixture<TriViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
