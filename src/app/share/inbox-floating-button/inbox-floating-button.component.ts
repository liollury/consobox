import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector   : 'app-inbox-floating-button',
  templateUrl: './inbox-floating-button.component.html',
  styleUrls  : ['./inbox-floating-button.component.scss']
})
export class InboxFloatingButtonComponent implements OnInit {

  static openState = 'open';
  static closeState = 'closed';

  @Input() position: string;
  @Input() effect: string;
  @Input() label: string;
  @Input('restingIcon') resting: string;
  @Input('activeIcon') active: string;
  @Input() mainAction: string;
  @Input() menuState: string;
  @Input('method') togglingMethod: string;


  constructor() {
  }

  ngOnInit() {
  }

  open() {
    this.menuState = InboxFloatingButtonComponent.openState;
  }

  close() {
    this.menuState = InboxFloatingButtonComponent.closeState;
  }

  toggle() {
    if (this.menuState === InboxFloatingButtonComponent.openState) {
      this.close();
    }else{
      this.open();
    }
  }

  hovered() {
    if (this.togglingMethod === 'hover') {
      this.toggle();
    }
  }

  clicked() {
    if (this.togglingMethod === 'click') {
      this.toggle();
    }
  }


}
