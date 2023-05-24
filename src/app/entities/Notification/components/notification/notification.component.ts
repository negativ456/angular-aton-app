import { Component, Input, OnInit } from '@angular/core';
import { NotificationType } from '../../model/const/notificationConst';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app/app.state';
import { Notification } from '../../model/types/notification';
import { removeNotification } from '../../model/state/notification.actions';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  @Input() notification: Notification;

  ngOnInit(): void {
    const timeout = setTimeout(() => {
      this.store.dispatch(removeNotification({ id: this.notification.id }));
      console.log('timeout');
    }, 5000);
  }

  onClose() {
    this.store.dispatch(removeNotification({ id: this.notification.id }));
  }

  protected readonly NotificationType = NotificationType;
}
