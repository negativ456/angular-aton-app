import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModalComponent } from './Modal/modal.component';
import { MatTableModule } from '@angular/material/table';
import { LoaderComponent } from './Loader/loader.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { GridIconComponent } from './grid-icon/grid-icon.component';
import { TableIconComponent } from './table-icon/table-icon.component';
@NgModule({
  declarations: [ModalComponent, LoaderComponent, GridIconComponent, TableIconComponent],
  imports: [CommonModule],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    ModalComponent,
    MatTableModule,
    LoaderComponent,
    MatPaginatorModule,
  ],
})
export class UiKitModule {}
