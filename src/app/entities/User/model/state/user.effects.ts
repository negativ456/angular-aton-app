import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app/app.state';

import { catchError, map, of, switchMap } from 'rxjs';

import { UserService } from '../services/user.service';
import {
  createUserStart,
  createUserSuccess,
  deleteUserStart,
  deleteUserSuccess,
  getUsersStart,
  getUsersSuccess,
  setIsLoading,
  updateUserStart,
  updateUserSuccess,
} from './user.action';
import { ModalService } from '../../../../shared/lib/services/modal/modal.service';
import { addNotification } from '../../../Notification/model/state/notification.actions';
import { NotificationType } from '../../../Notification/model/const/notificationConst';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store<AppState>,
    private modalService: ModalService
  ) {}

  getUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getUsersStart),
      switchMap((action) => {
        return this.userService.getUsers(action.page).pipe(
          map((data) => {
            this.store.dispatch(setIsLoading({ isLoading: false }));
            this.store.dispatch(
              addNotification({
                notification: {
                  message: `Users successfully received`,
                  notificationType: NotificationType.SUCCESS,
                },
              })
            );
            return getUsersSuccess({
              users: data.data,
              totalUsers: data.total,
            });
          }),
          catchError((errResp) => {
            this.store.dispatch(setIsLoading({ isLoading: false }));
            return of(
              addNotification({
                notification: {
                  message: 'Error while getting users',
                  notificationType: NotificationType.ERROR,
                },
              })
            );
          })
        );
      })
    );
  });

  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateUserStart),
      switchMap((action) => {
        return this.userService.updateUser(action.user).pipe(
          map((user) => {
            this.store.dispatch(setIsLoading({ isLoading: false }));
            this.store.dispatch(
              addNotification({
                notification: {
                  message: `User id ${user.id} was updated successfully`,
                  notificationType: NotificationType.SUCCESS,
                },
              })
            );
            this.modalService.close();
            return updateUserSuccess({ user });
          }),
          catchError((errResp) => {
            this.store.dispatch(setIsLoading({ isLoading: false }));
            return of(
              addNotification({
                notification: {
                  message: 'Error while updating users',
                  notificationType: NotificationType.ERROR,
                },
              })
            );
          })
        );
      })
    );
  });

  deleteUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteUserStart),
      switchMap((action) => {
        return this.userService.deleteUser(action.user).pipe(
          map(() => {
            this.store.dispatch(setIsLoading({ isLoading: false }));
            this.store.dispatch(
              addNotification({
                notification: {
                  message: `User id ${action.user.id} was deleted successfully`,
                  notificationType: NotificationType.SUCCESS,
                },
              })
            );
            this.modalService.close();
            return deleteUserSuccess({ user: action.user });
          }),
          catchError((errResp) => {
            this.store.dispatch(setIsLoading({ isLoading: false }));
            return of(
              addNotification({
                notification: {
                  message: 'Error while deleting users',
                  notificationType: NotificationType.ERROR,
                },
              })
            );
          })
        );
      })
    );
  });

  createUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createUserStart),
      switchMap((action) => {
        return this.userService.createUser(action.user).pipe(
          map((data) => {
            this.store.dispatch(setIsLoading({ isLoading: false }));
            this.store.dispatch(
              addNotification({
                notification: {
                  message: `User was created successfully`,
                  notificationType: NotificationType.SUCCESS,
                },
              })
            );
            this.modalService.close();
            return createUserSuccess({ user: { ...action.user, id: data.id } });
          }),
          catchError((errResp) => {
            this.store.dispatch(setIsLoading({ isLoading: false }));
            return of(
              addNotification({
                notification: {
                  message: 'Error while creating users',
                  notificationType: NotificationType.ERROR,
                },
              })
            );
          })
        );
      })
    );
  });
}
