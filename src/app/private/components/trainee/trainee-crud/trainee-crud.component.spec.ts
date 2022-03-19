import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeCrudComponent } from './trainee-crud.component';

describe('TraineeCrudComponent', () => {
  let component: TraineeCrudComponent;
  let fixture: ComponentFixture<TraineeCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
