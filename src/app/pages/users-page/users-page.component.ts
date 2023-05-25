import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../shared/lib/services/modal/modal.service';
import { Modals } from '../../shared/const/modals';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/app.state';
import { autoUserView } from '../../entities/User/model/state/user.action';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
})
export class UsersPageComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    public modalService: ModalService
  ) {}
  protected readonly Modals = Modals;

  ngOnInit(): void {
    this.store.dispatch(autoUserView());
  }
}
