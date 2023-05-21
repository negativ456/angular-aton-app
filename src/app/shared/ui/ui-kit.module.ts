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
@NgModule({
  declarations: [ModalComponent, LoaderComponent],
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
  ],
})
export class UiKitModule {}
