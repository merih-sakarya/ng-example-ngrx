import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as ACTION from '../store/auth.action';
import * as SELECTOR from '../store/auth.selector';

import { LoginRequestModel } from '@shared/models/http/request/auth/login-request.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  // prettier-ignore
  loginForm = new FormGroup({
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    password: new FormControl<string | null>(null, [Validators.required])
  });

  isLoadingLogin$: Observable<boolean> = this.store.select(SELECTOR.selectLoginLoading);

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onFormSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const loginForm = this.loginForm.value;
    const loginRequestModel = new LoginRequestModel(loginForm.email!, loginForm.password!);
    this.store.dispatch(ACTION.loginAction({ loginRequestModel }));
  }
}
