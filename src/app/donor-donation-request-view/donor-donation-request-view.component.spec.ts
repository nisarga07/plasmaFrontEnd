import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorDonationRequestViewComponent } from './donor-donation-request-view.component';

describe('DonorDonationRequestViewComponent', () => {
  let component: DonorDonationRequestViewComponent;
  let fixture: ComponentFixture<DonorDonationRequestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorDonationRequestViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorDonationRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
