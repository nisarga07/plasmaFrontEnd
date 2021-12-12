import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAcceptorRequestViewComponent } from './admin-acceptor-request-view.component';

describe('AdminAcceptorRequestViewComponent', () => {
  let component: AdminAcceptorRequestViewComponent;
  let fixture: ComponentFixture<AdminAcceptorRequestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAcceptorRequestViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAcceptorRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
