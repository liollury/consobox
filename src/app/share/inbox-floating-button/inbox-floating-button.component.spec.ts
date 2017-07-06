import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxFloatingButtonComponent } from './inbox-floating-button.component';

describe('InboxFloatingButtonComponent', () => {
  let component: InboxFloatingButtonComponent;
  let fixture: ComponentFixture<InboxFloatingButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxFloatingButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxFloatingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
