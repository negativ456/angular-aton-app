import { GridIconComponent } from '../../../../shared/ui/grid-icon/grid-icon.component';
import { UsersViews } from '../../../../entities/User/model/const/const';
import { TableIconComponent } from '../../../../shared/ui/table-icon/table-icon.component';

export const viewTypes = [
  {
    view: UsersViews.GRID,
    img: GridIconComponent,
  },
  {
    view: UsersViews.TABLE,
    img: TableIconComponent,
  },
];
