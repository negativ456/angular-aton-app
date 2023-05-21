import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { UiKitModule } from '../../shared/ui';
import { NgForOf, NgIf } from '@angular/common';
import { AuthModule } from '../../features/AuthForm';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [UiKitModule, AuthModule, NgForOf, NgIf],
  exports: [LoginPageComponent],
})
export class LoginPageModule {}
