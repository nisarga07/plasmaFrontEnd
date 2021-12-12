import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptorRequestComponent } from './acceptor-request.component';

describe('AcceptorRequestComponent', () => {
  let component: AcceptorRequestComponent;
  let fixture: ComponentFixture<AcceptorRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptorRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptorRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
