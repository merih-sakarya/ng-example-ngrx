import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { UserService } from '@core/services/user.service';
import { AuthenticationService } from '@core/services/authentication.service';

import * as ACTION from './auth.action';
import * as NOTIFICATON_ACTION from '@routes/notification/store/notification.action';

import { UserResponseModel } from '@shared/models/http/response/user/user-response.model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthEffect {
  // to define an Effect, use the `createEffect` method
  login$ = createEffect(() => {
    return this.actions$.pipe(
      // filter out the actions, except for '[Auth] Login'
      ofType(ACTION.loginAction),
      mergeMap(action => {
        // call the service
        return this.authenticationService.login(action.loginRequestModel).pipe(
          map((userResponseModel: UserResponseModel) => {
            // Initialize user essential information and redirect to home page.
            this.handleLoginSuccess();
            // return a Success action when the HTTP request was successfull
            return ACTION.loginSuccessAction({ userResponseModel });
          }),
          catchError((err: HttpErrorResponse) => {
            // return a Failed action when something went wrong during the HTTP request
            return of(ACTION.loginFailureAction(err));
          })
        );
      })
    );
  });

  // to define an Effect, use the `createEffect` method
  register$ = createEffect(() => {
    return this.actions$.pipe(
      // filter out the actions, except for '[Auth] Register'
      ofType(ACTION.registerAction),
      mergeMap(action => {
        // call the service
        return this.authenticationService.register(action.registerRequestModel).pipe(
          map((userResponseModel: UserResponseModel) => {
            // return a Success action when the HTTP request was successfull
            return ACTION.registerSuccessAction({ userResponseModel });
          }),
          catchError((err: HttpErrorResponse) => {
            // return a Failed action when something went wrong during the HTTP request
            return of(ACTION.registerFailureAction(err));
          })
        );
      })
    );
  });

  // to define an Effect, use the `createEffect` method
  getCurrentUser$ = createEffect(() => {
    return this.actions$.pipe(
      // filter out the actions, except for '[Auth] Get Current User'
      ofType(ACTION.getCurrentUserAction),
      mergeMap(() => {
        // call the service
        return this.userService.getUser().pipe(
          map((userResponseModel: UserResponseModel) => {
            // return a Success action when the HTTP request was successfull
            return ACTION.getCurrentUserSuccessAction({ userResponseModel });
          }),
          catchError((err: HttpErrorResponse) => {
            // return a Failed action when something went wrong during the HTTP request
            return of(ACTION.getCurrentUserFailureAction(err));
          })
        );
      })
    );
  });

  // to define an Effect, use the `createEffect` method
  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        // filter out the actions, except for '[Auth] Logout'
        ofType(ACTION.logoutAction),
        tap(() => {
          this.authenticationService.logout();
        })
      );
    },
    { dispatch: false }
  );

  handleLoginSuccess() {
    // Retrive notifications
    this.store.dispatch(NOTIFICATON_ACTION.listNotificationsAction());
    // Navigate to home.
    this.router.navigate(['/']);
  }

  constructor(
    private store: Store,
    private router: Router,
    private actions$: Actions,
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {}
}
