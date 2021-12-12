import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorRequestListViewComponent } from './donor-request-list-view.component';

describe('DonorRequestListViewComponent', () => {
  let component: DonorRequestListViewComponent;
  let fixture: ComponentFixture<DonorRequestListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorRequestListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorRequestListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
