import { CanActivateFn, Router } from '@angular/router';
import { USER_LOCALSTORAGE_KEY } from '../../../shared/const/localstorageKeys';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

  const router = inject(Router);
  if (!user) {
    router.navigateByUrl('login');
    return false;
  }
  return true;
};
