import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from '../../../../app/app.state';
import { loginStart, setIsLoading } from '../../model/store/auth.actions';
import { Observable } from 'rxjs';
import { getLoading } from '../../model/store/auth.selectors';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent implements OnInit {
  isLoading$: Observable<boolean>;
  form: FormGroup;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [Validators.required]),
    });
    this.isLoading$ = this.store.select(getLoading);
  }

  submit() {
    const email = this.form.value.email;
    const password = this.form.value.password;

    this.store.dispatch(setIsLoading({ isLoading: true }));
    this.store.dispatch(loginStart({ email, password }));
  }
}
