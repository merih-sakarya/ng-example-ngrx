import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthEffect } from '../store/auth.effect';
import { authFeature } from '../store/auth.reducer';

import { LoginComponent } from './login.component';
import { UserContextModel } from '@shared/models/security/user-context.model';
import { AuthenticationService } from '@core/services/authentication.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authenticationTestingService = jasmine.createSpyObj<AuthenticationService>(['login']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatInputModule,
        MatFormFieldModule,
        StoreModule.forRoot({ [authFeature.name]: authFeature.reducer }),
        EffectsModule.forRoot([AuthEffect])
      ],
      providers: [{ provide: AuthenticationService, useValue: authenticationTestingService }]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    // Set return value;
    authenticationTestingService.login.and.returnValue(of(new UserContextModel()));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log the user in when Log in button is clicked', () => {
    expect(authenticationTestingService.login).not.toHaveBeenCalled();

    // Set input element value.
    const elementUsername = fixture.debugElement.query(By.css('input[data-test="login-username"]')).nativeElement;
    elementUsername.value = 'test_username@domain.com';
    // Dispatch a DOM event so that Angular learns of input value change.
    elementUsername.dispatchEvent(new Event('input'));

    // Set input element value.
    const elementPassword = fixture.debugElement.query(By.css('input[data-test="login-password"]')).nativeElement;
    elementPassword.value = 'test_password';
    // Dispatch a DOM event so that Angular learns of input value change.
    elementPassword.dispatchEvent(new Event('input'));

    // Click the submit button.
    fixture.debugElement.query(By.css('button[data-test="login-submit"]')).nativeElement.click();
    // Tell Angular to update the display binding.
    fixture.detectChanges();

    expect(authenticationTestingService.login).toHaveBeenCalledTimes(1);
  });
});
