import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DakManagementOutwardComponent } from './dak-management-outward.component';

describe('DakManagementOutwardComponent', () => {
  let component: DakManagementOutwardComponent;
  let fixture: ComponentFixture<DakManagementOutwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DakManagementOutwardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DakManagementOutwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
