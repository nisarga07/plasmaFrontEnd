import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptorRequestListViewComponent } from './acceptor-request-list-view.component';

describe('AcceptorRequestListViewComponent', () => {
  let component: AcceptorRequestListViewComponent;
  let fixture: ComponentFixture<AcceptorRequestListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptorRequestListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptorRequestListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
