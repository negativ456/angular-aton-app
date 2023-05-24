import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../shared/lib/services/modal/modal.service';
import { User } from '../../model/types/user';
import { UserService } from '../../model/services/user.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app/app.state';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createUserStart, setIsLoading } from '../../model/state/user.action';
import { getUsersLoading } from '../../model/state/user.selectors';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
})
export class AddUserModalComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.select(getUsersLoading);
  form: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl<string>('', [Validators.required]),
      lastName: new FormControl<string>('', [Validators.required]),
      avatar: new FormControl<string>('', [Validators.required]),
    });
  }

  constructor(
    public modalService: ModalService<User>,
    private userService: UserService,
    private store: Store<AppState>
  ) {}

  createUser() {
    this.store.dispatch(setIsLoading({ isLoading: true }));
    this.store.dispatch(
      createUserStart({
        user: {
          first_name: this.form.value.firstName,
          last_name: this.form.value.lastName,
          avatar: this.form.value.avatar,
        },
      })
    );
  }
}
