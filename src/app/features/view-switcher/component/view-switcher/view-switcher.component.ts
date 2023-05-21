import { Component, Input } from '@angular/core';
import { UsersViews } from '../../../../entities/User/model/const/const';

@Component({
  selector: 'app-view-switcher',
  templateUrl: './view-switcher.component.html',
})
export class ViewSwitcherComponent {
  @Input() changeView: (view: UsersViews) => void;
  @Input() view: UsersViews;

  viewTypes = [
    {
      view: UsersViews.GRID,
      text: 'Grid',
    },
    {
      view: UsersViews.TABLE,
      text: 'Table',
    },
  ];
}
