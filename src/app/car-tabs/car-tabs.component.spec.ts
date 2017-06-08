import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTabsComponent } from './car-tabs.component';

describe('CarTabsComponent', () => {
  let component: CarTabsComponent;
  let fixture: ComponentFixture<CarTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
