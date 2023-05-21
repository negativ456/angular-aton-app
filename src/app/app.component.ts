import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { Observable } from 'rxjs';
import { getNotificationOpen } from './entities/Notification/model/state/notification.selectors';
import { autoLogin } from './features/AuthForm/model/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  isVisible$: Observable<boolean>;
  title = 'angular-aton-app';
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isVisible$ = this.store.select(getNotificationOpen);
    this.store.dispatch(autoLogin());
  }
}
