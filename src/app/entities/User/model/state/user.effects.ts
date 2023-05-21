import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app.state';

import { exhaustMap, map, switchMap } from 'rxjs';
import {
  setErrorMessage,
  setIsLoading,
} from '../../../../shared/lib/state/common/common.actions';
import { UserService } from '../services/user.service';
import {
  deleteUserStart,
  deleteUserSuccess,
  getUsersStart,
  getUsersSuccess,
  updateUserStart,
  updateUserSuccess,
} from './user.action';
import { ModalService } from '../../../../shared/lib/services/modal/modal.service';

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
        return this.userService.getUsers().pipe(
          map((data) => {
            this.store.dispatch(setIsLoading({ status: false }));
            this.store.dispatch(setErrorMessage({ message: '' }));
            return getUsersSuccess({ users: data.data });
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

  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateUserStart),
      switchMap((action) => {
        return this.userService.updateUser(action.user).pipe(
          map((user) => {
            this.store.dispatch(setIsLoading({ status: false }));
            this.store.dispatch(setErrorMessage({ message: '' }));
            this.modalService.close();
            return updateUserSuccess({ user });
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
            this.store.dispatch(setIsLoading({ status: false }));
            this.store.dispatch(setErrorMessage({ message: '' }));
            this.modalService.close();
            return deleteUserSuccess({ user: action.user });
          })
        );
      })
    );
  });
}
