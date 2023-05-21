import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RegistrationForm } from '../../model/types/types';
import { AuthService } from '../../model/service/auth.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app.state';
import { setIsLoading, signupStart } from '../../model/store/auth.actions';
import { getLoading } from '../../model/store/auth.selectors';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
})
export class RegistrationFormComponent implements OnInit {
  isLoading$: Observable<boolean>;
  constructor(private store: Store<AppState>) {}
  form = new FormGroup({
    email: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
  });

  submit() {
    this.store.dispatch(setIsLoading({ isLoading: true }));
    this.store.dispatch(signupStart(this.form.value as RegistrationForm));
  }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(getLoading);
  }
}
