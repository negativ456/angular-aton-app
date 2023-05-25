import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app/app.state';
import { Router } from '@angular/router';
import { logout } from '../../../../features/AuthForm/model/store/auth.actions';
import { Observable } from 'rxjs';
import { isAuthenticated } from '../../../../features/AuthForm/model/store/auth.selectors';
import { UsersViews } from '../../../../entities/User/model/const/const';
import { getUserView } from '../../../../entities/User/model/state/user.selectors';
import { setUserView } from '../../../../entities/User/model/state/user.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAuth: Observable<boolean>;
  userView: Observable<UsersViews>;
  constructor(private store: Store<AppState>, private router: Router) {}

  onLogout() {
    this.store.dispatch(logout());
    this.router.navigate(['/login']);
  }

  onChangeView(view: UsersViews) {
    this.store.dispatch(setUserView({ userView: view }));
  }

  ngOnInit(): void {
    this.isAuth = this.store.select(isAuthenticated);
    this.userView = this.store.select(getUserView);
  }
}
