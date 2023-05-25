import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSwitcherComponent } from './component/view-switcher/view-switcher.component';
import {
  DynamicAttributesDirective,
  DynamicComponent,
} from 'ng-dynamic-component';

@NgModule({
  declarations: [ViewSwitcherComponent],
  imports: [CommonModule, DynamicComponent, DynamicAttributesDirective],
  exports: [ViewSwitcherComponent],
})
export class ViewSwitcherModule {}
