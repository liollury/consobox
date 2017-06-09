export enum NotificationType {
  CAR_TAB_CHANGE
}

export interface Notification {
  type: NotificationType;
}

export class CarTabChangeNotification implements Notification {
  type = NotificationType.CAR_TAB_CHANGE;
  constructor(private $event) { }
}
