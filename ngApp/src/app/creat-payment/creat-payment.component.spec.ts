import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatPaymentComponent } from './creat-payment.component';

describe('CreatPaymentComponent', () => {
  let component: CreatPaymentComponent;
  let fixture: ComponentFixture<CreatPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
