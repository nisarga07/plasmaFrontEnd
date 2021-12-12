import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptorDonorViewComponent } from './acceptor-donor-view.component';

describe('AcceptorDonorViewComponent', () => {
  let component: AcceptorDonorViewComponent;
  let fixture: ComponentFixture<AcceptorDonorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptorDonorViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptorDonorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
