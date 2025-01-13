import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSectionAppointmentComponent } from './right-section-appointment.component';

describe('RightSectionAppointmentComponent', () => {
  let component: RightSectionAppointmentComponent;
  let fixture: ComponentFixture<RightSectionAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightSectionAppointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightSectionAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
