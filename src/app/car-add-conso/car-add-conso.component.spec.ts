import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAddConsoComponent } from './car-add-conso.component';

describe('CarAddConsoComponent', () => {
  let component: CarAddConsoComponent;
  let fixture: ComponentFixture<CarAddConsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarAddConsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAddConsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
