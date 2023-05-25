import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { provideMockStore } from '@ngrx/store/testing';
import { ViewSwitcherComponent } from '../../../../features/view-switcher/component/view-switcher/view-switcher.component';
import {
  DynamicAttributesDirective,
  DynamicComponent,
} from 'ng-dynamic-component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, ViewSwitcherComponent],
      providers: [provideMockStore({})],
      imports: [DynamicAttributesDirective, DynamicComponent],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
