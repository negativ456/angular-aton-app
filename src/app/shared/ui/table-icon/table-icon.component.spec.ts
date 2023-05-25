import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableIconComponent } from './table-icon.component';

describe('TableIconComponent', () => {
  let component: TableIconComponent;
  let fixture: ComponentFixture<TableIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableIconComponent]
    });
    fixture = TestBed.createComponent(TableIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
