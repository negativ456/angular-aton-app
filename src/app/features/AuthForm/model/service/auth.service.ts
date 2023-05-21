import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { LoginForm, RegistrationForm, UserData } from '../types/types';
import { USER_LOCALSTORAGE_KEY } from '../../../../shared/const/localstorageKeys';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(form: LoginForm) {
    return this.http.post('https://reqres.in/api/login', form);
  }

  signUp(form: RegistrationForm) {
    return this.http.post('https://reqres.in/api/register', form).pipe(
      tap(() => {
        this.router.navigate(['/users']);
      })
    );
  }

  setUserInLocalStorage(user: UserData) {
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
  }

  getUserFromLocalStorage() {
    const userDataString = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      return userData;
    }
    return null;
  }

  logout() {
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
  }
}
