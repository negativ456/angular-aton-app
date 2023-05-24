import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app/app.state';
import { Observable } from 'rxjs';
import { Notification } from '../../model/types/notification';
import { getNotifications } from '../../model/state/notification.selectors';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
})
export class NotificationsListComponent {
  notifications$: Observable<Notification[]> =
    this.store.select(getNotifications);
  constructor(private store: Store<AppState>) {}
}
