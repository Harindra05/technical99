import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninWithOtpComponent } from './signin-with-otp.component';

describe('SigninWithOtpComponent', () => {
  let component: SigninWithOtpComponent;
  let fixture: ComponentFixture<SigninWithOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninWithOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninWithOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
