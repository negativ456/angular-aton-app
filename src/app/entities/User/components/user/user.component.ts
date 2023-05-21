import { Component, Input } from '@angular/core';
import { User } from '../../model/types/user';
import { ModalService } from '../../../../shared/lib/services/modal/modal.service';
import { Modals } from '../../../../shared/const/modals';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  @Input() user: User;

  constructor(public modalService: ModalService<User>) {}

  protected readonly Modals = Modals;
}
