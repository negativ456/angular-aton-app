import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormComponent } from './registration-form.component';
import { provideMockStore } from '@ngrx/store/testing';
import { UiKitModule } from '../../../../shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegistrationFormComponent', () => {
  let component: RegistrationFormComponent;
  let fixture: ComponentFixture<RegistrationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationFormComponent],
      imports: [UiKitModule, ReactiveFormsModule, BrowserAnimationsModule],
      providers: [provideMockStore({ initialState: {} })],
    });
    fixture = TestBed.createComponent(RegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
