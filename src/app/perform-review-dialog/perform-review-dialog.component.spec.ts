import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformReviewDialogComponent } from './perform-review-dialog.component';

describe('PerformReviewDialogComponent', () => {
  let component: PerformReviewDialogComponent;
  let fixture: ComponentFixture<PerformReviewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformReviewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformReviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
