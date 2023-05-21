import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../service/auth.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '../../../../app.state';
import {
  autoLogin,
  loginStart,
  loginSuccess,
  logout,
  setIsLoading,
  signupStart,
  signupSuccess,
} from './auth.actions';
import { exhaustMap, map, mergeMap, of } from 'rxjs';
import { openNotification } from '../../../../entities/Notification/model/state/notification.actions';
import { NotificationType } from '../../../../entities/Notification/model/const/notificationConst';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action).pipe(
          map((data) => {
            this.store.dispatch(setIsLoading({ isLoading: false }));
            // this.store.dispatch(setErrorMessage({ message: '' }));
            this.authService.setUserInLocalStorage(action);
            this.store.dispatch(
              openNotification({
                message: 'Login is successful',
                notificationType: NotificationType.SUCCESS,
              })
            );
            this.router.navigate(['/users']);
            return loginSuccess({ userData: action });
          })
          // catchError((errResp) => {
          //   this.store.dispatch(setIsLoading({ status: false }));
          //   const errorMessage = this.authService.getErrorMessage(
          //     errResp.error.error.message
          //   );
          //   return of(setErrorMessage({ message: errorMessage }));
          // })
        );
      })
    );
  });

  signup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signupStart),
      exhaustMap((action) => {
        return this.authService.signUp(action).pipe(
          map(() => {
            this.store.dispatch(setIsLoading({ isLoading: false }));
            this.authService.setUserInLocalStorage(action);
            this.store.dispatch(
              openNotification({
                message: 'Signup is successful',
                notificationType: NotificationType.SUCCESS,
              })
            );
            this.router.navigate(['/users']);
            return signupSuccess({ userData: action });
          })
        );
      })
    );
  });

  autoLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(autoLogin),
      mergeMap((action) => {
        const user = this.authService.getUserFromLocalStorage();
        if (user) {
          this.router.navigate(['/users']);
        }
        return of(loginSuccess({ userData: user }));
      })
    );
  });

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(logout),
        map((action) => {
          this.authService.logout();
          this.router.navigate(['login']);
        })
      );
    },
    { dispatch: false }
  );
}
