import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridIconComponent } from './grid-icon.component';

describe('GridIconComponent', () => {
  let component: GridIconComponent;
  let fixture: ComponentFixture<GridIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridIconComponent]
    });
    fixture = TestBed.createComponent(GridIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
