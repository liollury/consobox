import {Component, Host, Input, OnInit} from '@angular/core';
import {InboxFloatingButtonComponent} from '../inbox-floating-button/inbox-floating-button.component';

@Component({
  selector: 'app-inbox-floating-button-item',
  templateUrl: './inbox-floating-button-item.component.html',
  styleUrls: ['./inbox-floating-button-item.component.scss'],
})
export class InboxFloatingButtonItemComponent implements OnInit {
  @Input() label: string;
  @Input() icon: string;

  constructor(@Host() private parent: InboxFloatingButtonComponent) { }

  ngOnInit() {
  }

}
