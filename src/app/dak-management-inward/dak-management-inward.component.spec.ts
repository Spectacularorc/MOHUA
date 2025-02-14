import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DakManagementInwardComponent } from './dak-management-inward.component';

describe('DakManagementInwardComponent', () => {
  let component: DakManagementInwardComponent;
  let fixture: ComponentFixture<DakManagementInwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DakManagementInwardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DakManagementInwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
