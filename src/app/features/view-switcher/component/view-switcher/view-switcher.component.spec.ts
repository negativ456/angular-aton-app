import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSwitcherComponent } from './view-switcher.component';
import { provideMockStore } from '@ngrx/store/testing';
import {
  DynamicAttributesDirective,
  DynamicComponent,
} from 'ng-dynamic-component';

describe('ViewSwitcherComponent', () => {
  let component: ViewSwitcherComponent;
  let fixture: ComponentFixture<ViewSwitcherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSwitcherComponent],
      providers: [provideMockStore({})],
      imports: [DynamicAttributesDirective, DynamicComponent],
    });
    fixture = TestBed.createComponent(ViewSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
