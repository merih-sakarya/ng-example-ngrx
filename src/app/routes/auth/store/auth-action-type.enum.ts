export enum AuthActionTypeEnum {
  // LOGIN
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login success',
  LOGIN_FAILURE = '[Auth] Login failure',

  // REGISTER
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register success',
  REGISTER_FAILURE = '[Auth] Register failure',

  // GET Current User
  GET_CURRENT_USER = '[Auth] Get Current User',
  GET_CURRENT_USER_SUCCESS = '[Auth] Get Current User success',
  GET_CURRENT_USER_FAILURE = '[Auth] Get Current User failure',

  // LOGOUT
  LOGOUT = '[Auth] Logout'
}
