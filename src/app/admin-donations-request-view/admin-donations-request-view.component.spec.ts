import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDonationsRequestViewComponent } from './admin-donations-request-view.component';

describe('AdminDonationsRequestViewComponent', () => {
  let component: AdminDonationsRequestViewComponent;
  let fixture: ComponentFixture<AdminDonationsRequestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDonationsRequestViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDonationsRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
