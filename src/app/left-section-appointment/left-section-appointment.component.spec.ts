import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSectionAppointmentComponent } from './left-section-appointment.component';

describe('LeftSectionAppointmentComponent', () => {
  let component: LeftSectionAppointmentComponent;
  let fixture: ComponentFixture<LeftSectionAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftSectionAppointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSectionAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
