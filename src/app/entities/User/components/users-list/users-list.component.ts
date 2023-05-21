import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../model/services/user.service';
import { UsersViews } from '../../model/const/const';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app.state';
import { getUsersStart } from '../../model/state/user.action';
import { setIsLoading } from '../../../../shared/lib/state/common/common.actions';
import { Observable } from 'rxjs';
import { User } from '../../model/types/user';
import { getLoading } from '../../../../shared/lib/state/common/common.selectors';
import { getUsers } from '../../model/state/user.selectors';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {
  @Input() view: UsersViews;
  isLoading$: Observable<boolean>;
  users$: Observable<User[]>;
  constructor(
    public userService: UserService,
    private store: Store<AppState>
  ) {}
  ngOnInit(): void {
    this.store.dispatch(setIsLoading({ status: true }));

    this.store.dispatch(getUsersStart());
    this.isLoading$ = this.store.select(getLoading);
    this.users$ = this.store.select(getUsers);
    // this.this.userService.getUsers().subscribe(() => {});
  }

  protected readonly UsersViews = UsersViews;
}
