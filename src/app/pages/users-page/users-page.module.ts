import { NgModule } from '@angular/core';
import { UsersPageComponent } from './users-page.component';
import { UiKitModule } from '../../shared/ui';
import { UserModule } from '../../entities/User/user.module';
import { AsyncPipe, NgIf } from '@angular/common';
import { NotificationModule } from '../../entities/Notification/notification.module';
import { HeaderModule } from '../../widgets/Header';

@NgModule({
  declarations: [UsersPageComponent],
  imports: [
    UiKitModule,
    UserModule,
    NgIf,
    AsyncPipe,
    NotificationModule,
    HeaderModule,
  ],
  exports: [UsersPageComponent],
})
export class UsersPageModule {}
