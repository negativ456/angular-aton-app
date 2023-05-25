import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { UiKitModule } from '../../shared/ui';
import { ViewSwitcherModule } from '../../features/view-switcher';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, UiKitModule, ViewSwitcherModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
