import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxFloatingButtonItemComponent } from './inbox-floating-button-item.component';

describe('InboxFloatingButtonItemComponent', () => {
  let component: InboxFloatingButtonItemComponent;
  let fixture: ComponentFixture<InboxFloatingButtonItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxFloatingButtonItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxFloatingButtonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
