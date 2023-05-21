import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../shared/lib/services/modal/modal.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/types/user';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app.state';
import { setIsLoading } from '../../../../shared/lib/state/common/common.actions';
import { updateUserStart } from '../../model/state/user.action';
import { Observable } from 'rxjs';
import { getLoading } from '../../../../shared/lib/state/common/common.selectors';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
})
export class EditUserModalComponent implements OnInit {
  isLoading$: Observable<boolean>;
  constructor(
    public modalService: ModalService<User>,
    private store: Store<AppState>
  ) {}
  form = new FormGroup({
    firstName: new FormControl<string>(
      this.modalService.modalData!.first_name,
      [Validators.required]
    ),
    lastName: new FormControl<string>(this.modalService.modalData!.last_name, [
      Validators.required,
    ]),
  });

  ngOnInit() {
    this.isLoading$ = this.store.select(getLoading);
  }

  onEdit() {
    const user = {
      ...this.modalService.modalData,
      first_name: this.form.value.firstName,
      last_name: this.form.value.lastName,
    };
    this.store.dispatch(setIsLoading({ status: true }));
    this.store.dispatch(updateUserStart({ user: user as User }));
  }
}
