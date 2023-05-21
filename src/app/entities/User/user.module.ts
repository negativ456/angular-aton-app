import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UiKitModule } from '../../shared/ui';
import { DeleteUserModalComponent } from './components/delete-user-modal/delete-user-modal.component';
import { EditUserModalComponent } from './components/edit-user-modal/edit-user-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserSkeletonComponent } from './components/user-skeleton/user-skeleton.component';

@NgModule({
  declarations: [
    UserComponent,
    UsersListComponent,
    DeleteUserModalComponent,
    EditUserModalComponent,
    UserSkeletonComponent,
  ],
  imports: [
    CommonModule,
    UiKitModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    MatPaginatorModule,
  ],
  exports: [
    UserComponent,
    UsersListComponent,
    DeleteUserModalComponent,
    EditUserModalComponent,
  ],
})
export class UserModule {}
