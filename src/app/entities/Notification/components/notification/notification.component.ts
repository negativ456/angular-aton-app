import { Component, OnInit } from '@angular/core';
import { NotificationType } from '../../model/const/notificationConst';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app.state';
import {
  getNotificationMessage,
  getNotificationOpen,
  getNotificationType,
} from '../../model/state/notification.selectors';
import { closeNotification } from '../../model/state/notification.actions';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent implements OnInit {
  isVisible$: Observable<boolean>;
  message$: Observable<string>;
  notificationType$: Observable<NotificationType>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isVisible$ = this.store.select(getNotificationOpen);
    this.message$ = this.store.select(getNotificationMessage);
    this.notificationType$ = this.store.select(getNotificationType);
    const timeout = setTimeout(() => {
      this.store.dispatch(closeNotification());
      console.log('timeout');
    }, 5000);
  }

  onClose() {
    this.store.dispatch(closeNotification());
  }

  protected readonly NotificationType = NotificationType;
}
