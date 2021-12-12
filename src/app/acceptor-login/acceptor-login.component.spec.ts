import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptorLoginComponent } from './acceptor-login.component';

describe('AcceptorLoginComponent', () => {
  let component: AcceptorLoginComponent;
  let fixture: ComponentFixture<AcceptorLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptorLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
