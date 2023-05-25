import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import { provideMockStore } from '@ngrx/store/testing';
import { UiKitModule } from '../../../../shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppState } from '../../../../app/app.state';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [UiKitModule, ReactiveFormsModule, BrowserAnimationsModule],
      providers: [
        provideMockStore<DeepPartial<AppState>>({
          initialState: {
            auth: {
              userData: null,
              isLoading: false,
            },
          },
        }),
        { provide: ComponentFixtureAutoDetect, useValue: true },
      ],
    });
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('set values to login form', () => {
    const emailInput: HTMLInputElement =
      fixture.nativeElement.querySelector('#LoginEmail');
    const passwordInput: HTMLInputElement =
      fixture.nativeElement.querySelector('#LoginPassword');
    emailInput.value = 'email';
    passwordInput.value = 'password';

    emailInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('input'));

    expect(emailInput.value).toBe('email');
    expect(passwordInput.value).toBe('password');
  });
});
