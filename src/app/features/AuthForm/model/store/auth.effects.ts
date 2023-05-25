import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../service/auth.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '../../../../app/app.state';
import {
  autoLogin,
  loginStart,
  loginSuccess,
  logout,
  setIsLoading,
  signupStart,
  signupSuccess,
} from './auth.actions';
import { catchError, exhaustMap, map, mergeMap, of } from 'rxjs';
import { NotificationType } from '../../../../entities/Notification/model/const/notificationConst';
import { addNotification } from '../../../../entities/Notification/model/state/notification.actions';

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
              addNotification({
                notification: {
                  message: 'Login is successful',
                  notificationType: NotificationType.SUCCESS,
                },
              })
            );
            this.router.navigate(['/users']);
            return loginSuccess({ userData: action });
          }),
          catchError((errResp) => {
            this.store.dispatch(setIsLoading({ isLoading: false }));
            return of(
              addNotification({
                notification: {
                  message: 'Error while login in',
                  notificationType: NotificationType.ERROR,
                },
              })
            );
          })
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
              addNotification({
                notification: {
                  message: 'Signup is successful',
                  notificationType: NotificationType.SUCCESS,
                },
              })
            );
            this.router.navigate(['/users']);
            return signupSuccess({ userData: action });
          }),
          catchError((errResp) => {
            this.store.dispatch(setIsLoading({ isLoading: false }));
            return of(
              addNotification({
                notification: {
                  message: 'Error while registration',
                  notificationType: NotificationType.ERROR,
                },
              })
            );
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
