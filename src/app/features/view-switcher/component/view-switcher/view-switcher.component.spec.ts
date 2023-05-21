import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSwitcherComponent } from './view-switcher.component';

describe('ViewSwitcherComponent', () => {
  let component: ViewSwitcherComponent;
  let fixture: ComponentFixture<ViewSwitcherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSwitcherComponent]
    });
    fixture = TestBed.createComponent(ViewSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
