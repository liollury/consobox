import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSpendComponent } from './car-spend.component';

describe('CarSpendComponent', () => {
  let component: CarSpendComponent;
  let fixture: ComponentFixture<CarSpendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarSpendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSpendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
