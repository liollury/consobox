import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarConsoComponent } from './car-conso.component';

describe('CarConsoComponent', () => {
  let component: CarConsoComponent;
  let fixture: ComponentFixture<CarConsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarConsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarConsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
