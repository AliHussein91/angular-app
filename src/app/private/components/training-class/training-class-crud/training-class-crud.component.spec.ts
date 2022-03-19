import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingClassCrudComponent } from './training-class-crud.component';

describe('TrainingClassCrudComponent', () => {
  let component: TrainingClassCrudComponent;
  let fixture: ComponentFixture<TrainingClassCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingClassCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingClassCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
