import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../types/user';
import { Observable, tap } from 'rxjs';

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

  getUsers(): Observable<UserResponse> {
    return this.http.get<UserResponse>('https://reqres.in/api/users', {
      params: new HttpParams({
        fromObject: { per_page: 12 },
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
}