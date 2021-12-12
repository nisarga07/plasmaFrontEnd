import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorDonationRequestComponent } from './donor-donation-request.component';

describe('DonorDonationRequestComponent', () => {
  let component: DonorDonationRequestComponent;
  let fixture: ComponentFixture<DonorDonationRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorDonationRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorDonationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
