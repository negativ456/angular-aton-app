import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationComponent } from '../../../entities/Notification/components/notification/notification.component';
import { provideMockStore } from '@ngrx/store/testing';
import { NotificationType } from '../../../entities/Notification/model/const/notificationConst';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationComponent],
      providers: [provideMockStore({})],
    });

    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    component.notification = {
      id: 0,
      message: '',
      notificationType: NotificationType.SUCCESS,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
