import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceCrudComponent } from './attendance-crud.component';

describe('AttendanceCrudComponent', () => {
  let component: AttendanceCrudComponent;
  let fixture: ComponentFixture<AttendanceCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
