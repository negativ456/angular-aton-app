import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../types/user';
import { Observable, tap } from 'rxjs';
import { USER_VIEW_LOCALSTORAGE_KEY } from '../../../../shared/const/localstorageKeys';
import { UsersViews } from '../const/const';

interface UserResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<UserResponse> {
    return this.http.get<UserResponse>('https://reqres.in/api/users', {
      params: new HttpParams({
        fromObject: { per_page: 6, page },
      }),
    });
  }

  updateUser(newUser: User): Observable<User> {
    return this.http.put<User>(
      `https://reqres.in/api/users/${newUser.id}`,
      newUser
    );
  }

  deleteUser(delUser: User): Observable<null> {
    return this.http.delete<null>(`https://reqres.in/api/users/${delUser.id}`);
  }

  createUser(
    user: Omit<User, 'id' | 'email'>
  ): Observable<{ id: number; createdAd: string }> {
    return this.http.post<{ id: number; createdAd: string }>(
      `https://reqres.in/api/users`,
      user
    );
  }

  getUserViewFromLocalStorage() {
    const userView = localStorage.getItem(USER_VIEW_LOCALSTORAGE_KEY);
    if (userView) {
      return JSON.parse(userView);
    }
    return UsersViews.GRID;
  }
}
