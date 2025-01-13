import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelManagementSchedularComponent } from './travel-management-schedular.component';

describe('TravelManagementSchedularComponent', () => {
  let component: TravelManagementSchedularComponent;
  let fixture: ComponentFixture<TravelManagementSchedularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelManagementSchedularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelManagementSchedularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
