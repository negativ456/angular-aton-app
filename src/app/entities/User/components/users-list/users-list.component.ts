import { Component, Input, OnInit } from '@angular/core';
import { UsersViews } from '../../model/const/const';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app/app.state';
import { getUsersStart, setIsLoading } from '../../model/state/user.action';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { User } from '../../model/types/user';
import {
  getTotalUsers,
  getUsers,
  getUsersLoading,
} from '../../model/state/user.selectors';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {
  @Input() view: UsersViews;
  isLoading$: Observable<boolean>;
  totalUsers$: Observable<number>;
  users$: Observable<User[]>;
  page: number = 1;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.dispatch(setIsLoading({ isLoading: true }));
    this.store.dispatch(getUsersStart({ page: this.page }));
    this.totalUsers$ = this.store.select(getTotalUsers);
    this.isLoading$ = this.store.select(getUsersLoading);
    this.users$ = this.store.select(getUsers);
  }

  onPage(e: PageEvent) {
    this.page = e.pageIndex + 1;
    this.store.dispatch(setIsLoading({ isLoading: true }));
    this.store.dispatch(getUsersStart({ page: this.page }));
  }

  protected readonly UsersViews = UsersViews;
}
