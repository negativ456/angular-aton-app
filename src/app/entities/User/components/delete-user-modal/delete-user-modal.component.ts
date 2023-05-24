import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../shared/lib/services/modal/modal.service';
import { User } from '../../model/types/user';
import { UserService } from '../../model/services/user.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app/app.state';
import { deleteUserStart, setIsLoading } from '../../model/state/user.action';
import { getUsersLoading } from '../../model/state/user.selectors';

@Component({
  selector: 'app-delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
})
export class DeleteUserModalComponent implements OnInit {
  isLoading$: Observable<boolean>;
  constructor(
    public modalService: ModalService<User>,
    private userService: UserService,
    private store: Store<AppState>
  ) {}
  deleteUser() {
    const user = this.modalService.modalData;
    if (user) {
      this.store.dispatch(setIsLoading({ isLoading: true }));
      this.store.dispatch(deleteUserStart({ user }));
    }
  }

  ngOnInit() {
    this.isLoading$ = this.store.select(getUsersLoading);
    console.log(this.isLoading$);
  }
}
