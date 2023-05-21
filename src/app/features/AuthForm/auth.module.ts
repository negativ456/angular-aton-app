import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { LoginFormComponent } from './components/login-form';
import { UiKitModule } from '../../shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [RegistrationFormComponent, LoginFormComponent],
  imports: [
    CommonModule,
    UiKitModule,
    ReactiveFormsModule,
    EffectsModule.forFeature(),
  ],
  exports: [RegistrationFormComponent, LoginFormComponent],
})
export class AuthModule {}
