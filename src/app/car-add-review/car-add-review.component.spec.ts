import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAddReviewComponent } from './car-add-review.component';

describe('CarAddReviewComponent', () => {
  let component: CarAddReviewComponent;
  let fixture: ComponentFixture<CarAddReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarAddReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAddReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
