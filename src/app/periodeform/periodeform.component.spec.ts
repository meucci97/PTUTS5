import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodeformComponent } from './periodeform.component';

describe('PeriodeformComponent', () => {
  let component: PeriodeformComponent;
  let fixture: ComponentFixture<PeriodeformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodeformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
