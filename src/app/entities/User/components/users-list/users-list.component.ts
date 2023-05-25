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
  getUserView,
} from '../../model/state/user.selectors';
import { Modals } from '../../../../shared/const/modals';
import { ModalService } from '../../../../shared/lib/services/modal/modal.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {
  isLoading$: Observable<boolean>;
  totalUsers$: Observable<number>;
  users$: Observable<User[]>;
  userView$: Observable<UsersViews>;
  page: number = 1;
  displayedColumns: string[] = [
    'id',
    'first_name',
    'last_name',
    'email',
    'action',
  ];
  constructor(
    private store: Store<AppState>,
    public modalService: ModalService
  ) {}
  ngOnInit(): void {
    this.store.dispatch(setIsLoading({ isLoading: true }));
    this.store.dispatch(getUsersStart({ page: this.page }));
    this.totalUsers$ = this.store.select(getTotalUsers);
    this.isLoading$ = this.store.select(getUsersLoading);
    this.users$ = this.store.select(getUsers);
    this.userView$ = this.store.select(getUserView);
  }

  onPage(e: PageEvent) {
    this.page = e.pageIndex + 1;
    this.store.dispatch(setIsLoading({ isLoading: true }));
    this.store.dispatch(getUsersStart({ page: this.page }));
  }

  protected readonly UsersViews = UsersViews;
  protected readonly Modals = Modals;
}
