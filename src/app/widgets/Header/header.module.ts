import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { UiKitModule } from '../../shared/ui';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, UiKitModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
