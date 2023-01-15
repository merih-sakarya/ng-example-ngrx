import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { AuthActionTypeEnum } from './auth-action-type.enum';
import { UserResponseModel } from '@shared/models/http/response/user/user-response.model';
import { LoginRequestModel } from '@shared/models/http/request/auth/login-request.model';
import { RegisterRequestModel } from '@shared/models/http/request/auth/register-request.model';

/****************************************
 * Login
 ****************************************/
export const loginAction = createAction(AuthActionTypeEnum.LOGIN, props<{ loginRequestModel: LoginRequestModel }>());
export const loginSuccessAction = createAction(AuthActionTypeEnum.LOGIN_SUCCESS, props<{ userResponseModel: UserResponseModel }>());
export const loginFailureAction = createAction(AuthActionTypeEnum.LOGIN_FAILURE, props<{ error: HttpErrorResponse }>());

/****************************************
 * Register
 ****************************************/
export const registerAction = createAction(AuthActionTypeEnum.REGISTER, props<{ registerRequestModel: RegisterRequestModel }>());
export const registerSuccessAction = createAction(AuthActionTypeEnum.REGISTER_SUCCESS, props<{ userResponseModel: UserResponseModel }>());
export const registerFailureAction = createAction(AuthActionTypeEnum.REGISTER_FAILURE, props<{ error: HttpErrorResponse }>());

/****************************************
 * GET Current user
 ****************************************/
export const getCurrentUserAction = createAction(AuthActionTypeEnum.GET_CURRENT_USER);
export const getCurrentUserSuccessAction = createAction(AuthActionTypeEnum.GET_CURRENT_USER_SUCCESS, props<{ userResponseModel: UserResponseModel }>());
export const getCurrentUserFailureAction = createAction(AuthActionTypeEnum.GET_CURRENT_USER_FAILURE, props<{ error: HttpErrorResponse }>());

/****************************************
 * Logout
 ****************************************/
export const logoutAction = createAction(AuthActionTypeEnum.LOGOUT);
