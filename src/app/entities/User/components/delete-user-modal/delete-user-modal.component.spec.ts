import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserModalComponent } from './delete-user-modal.component';
import { provideMockStore } from '@ngrx/store/testing';
import { provideHttpClient } from '@angular/common/http';
import { UiKitModule } from '../../../../shared/ui';

describe('DeleteUserModalComponent', () => {
  let component: DeleteUserModalComponent;
  let fixture: ComponentFixture<DeleteUserModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteUserModalComponent],
      imports: [UiKitModule],
      providers: [provideMockStore({ initialState: {} }), provideHttpClient()],
    });
    fixture = TestBed.createComponent(DeleteUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
