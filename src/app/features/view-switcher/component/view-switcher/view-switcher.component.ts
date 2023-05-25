import { Component, Input } from '@angular/core';
import { UsersViews } from '../../../../entities/User/model/const/const';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app/app.state';
import { viewTypes } from '../../model/const/viewTypes';
@Component({
  selector: 'app-view-switcher',
  templateUrl: './view-switcher.component.html',
})
export class ViewSwitcherComponent {
  @Input() changeView: (view: UsersViews) => void;
  @Input() view: UsersViews | null;
  constructor(private store: Store<AppState>) {}

  protected readonly viewTypes = viewTypes;
}
