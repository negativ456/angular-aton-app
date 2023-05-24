import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsListComponent } from './notifications-list.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('NotificationsListComponent', () => {
  let component: NotificationsListComponent;
  let fixture: ComponentFixture<NotificationsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationsListComponent],
      providers: [provideMockStore({})],
    });
    fixture = TestBed.createComponent(NotificationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
