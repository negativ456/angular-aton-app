import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationsListComponent } from './components/notifications-list/notifications-list.component';

@NgModule({
  declarations: [NotificationComponent, NotificationsListComponent],
  exports: [NotificationComponent, NotificationsListComponent],
  imports: [CommonModule],
})
export class NotificationModule {}
