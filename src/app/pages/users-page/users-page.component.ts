import { Component } from '@angular/core';
import { ModalService } from '../../shared/lib/services/modal/modal.service';
import { Modals } from '../../shared/const/modals';
import { NotificationType } from '../../entities/Notification/model/const/notificationConst';
import { UsersViews } from '../../entities/User/model/const/const';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
})
export class UsersPageComponent {
  constructor(public modalService: ModalService) {}
  view: UsersViews = UsersViews.GRID;
  protected readonly Modals = Modals;
  protected readonly NotificationType = NotificationType;
  protected readonly UsersViews = UsersViews;
}
