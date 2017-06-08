import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFabComponent } from './car-fab.component';

describe('CarFabComponent', () => {
  let component: CarFabComponent;
  let fixture: ComponentFixture<CarFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
