import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Notification} from '../models/notification.class';

@Injectable()
export class CommonService {

  private notify = new Subject<Notification>();

  notifyObservable$ = this.notify.asObservable();

  constructor() { }

  publish(notification: Notification) {
    if (notification) {
      this.notify.next(notification);
    }
}

}
