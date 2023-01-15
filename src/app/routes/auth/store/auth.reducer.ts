import { createReducer, on, createFeature } from '@ngrx/store';

import * as ACTION from './auth.action';
import { GenericState } from '@shared/models/common/generic-state.model';
import { UserResponseModel } from '@shared/models/http/response/user/user-response.model';

export interface AuthStateInterface extends GenericState<{ currentUser: UserResponseModel }> {}

const initialState: AuthStateInterface = {
  data: null,
  status: 'PENDING',
  error: null
};

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer<AuthStateInterface>(
    initialState,
    // LOGIN
    on(
      ACTION.loginAction,
      (state): AuthStateInterface => ({
        ...state,
        status: 'LOADING',
        error: null
      })
    ),
    on(
      ACTION.loginSuccessAction,
      (state, { userResponseModel }): AuthStateInterface => ({
        ...state,
        data: { ...{ currentUser: userResponseModel } },
        status: 'SUCCESS',
        error: null
      })
    ),
    on(
      ACTION.loginFailureAction,
      (state, { error }): AuthStateInterface => ({
        ...state,
        status: 'ERROR',
        error
      })
    ),
    // REGISTER
    on(
      ACTION.registerAction,
      (state): AuthStateInterface => ({
        ...state,
        status: 'LOADING',
        error: null
      })
    ),
    on(
      ACTION.registerSuccessAction,
      (state, { userResponseModel }): AuthStateInterface => ({
        ...state,
        data: { ...{ currentUser: userResponseModel } },
        status: 'SUCCESS',
        error: null
      })
    ),
    on(
      ACTION.registerFailureAction,
      (state, { error }): AuthStateInterface => ({
        ...state,
        status: 'ERROR',
        error
      })
    ),
    // GET current user
    on(
      ACTION.getCurrentUserAction,
      (state): AuthStateInterface => ({
        ...state,
        status: 'LOADING',
        error: null
      })
    ),
    on(
      ACTION.getCurrentUserSuccessAction,
      (state, { userResponseModel }): AuthStateInterface => ({
        ...state,
        data: { ...{ currentUser: userResponseModel } },
        status: 'SUCCESS',
        error: null
      })
    ),
    on(
      ACTION.getCurrentUserFailureAction,
      (state, { error }): AuthStateInterface => ({
        ...state,
        status: 'ERROR',
        error
      })
    ),
    // LOGOUT
    on(
      ACTION.logoutAction,
      (): AuthStateInterface => ({
        ...initialState
      })
    )
  )
});
