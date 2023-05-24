import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserModalComponent } from './add-user-modal.component';
import { provideHttpClient } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { UiKitModule } from '../../../../shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddUserModalComponent', () => {
  let component: AddUserModalComponent;
  let fixture: ComponentFixture<AddUserModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserModalComponent],
      imports: [UiKitModule, ReactiveFormsModule, BrowserAnimationsModule],
      providers: [provideHttpClient(), provideMockStore({})],
    });
    fixture = TestBed.createComponent(AddUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
