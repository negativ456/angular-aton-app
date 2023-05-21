import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserModalComponent } from './edit-user-modal.component';
import { provideMockStore } from '@ngrx/store/testing';
import { UiKitModule } from '../../../../shared/ui';
import { ModalService } from '../../../../shared/lib/services/modal/modal.service';
import { User } from '../../model/types/user';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EditUserModalComponent', () => {
  let component: EditUserModalComponent;
  let fixture: ComponentFixture<EditUserModalComponent>;

  beforeEach(() => {
    const modalService = new ModalService<User>();
    modalService.modalData = {
      id: 0,
      email: '',
      avatar: '',
      first_name: '',
      last_name: '',
    };
    TestBed.configureTestingModule({
      declarations: [EditUserModalComponent],
      imports: [UiKitModule, ReactiveFormsModule, BrowserAnimationsModule],
      providers: [
        provideMockStore({ initialState: {} }),
        { provide: ModalService, useValue: modalService },
      ],
    });
    fixture = TestBed.createComponent(EditUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
