import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDonorRequestViewComponent } from './admin-donor-request-view.component';

describe('AdminDonorRequestViewComponent', () => {
  let component: AdminDonorRequestViewComponent;
  let fixture: ComponentFixture<AdminDonorRequestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDonorRequestViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDonorRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
