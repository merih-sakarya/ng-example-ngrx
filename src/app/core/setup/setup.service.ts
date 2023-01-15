import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthContextUtil } from '@shared/utils/auth-context.util';
import { AuthenticationService } from '@core/services/authentication.service';

import * as AUTH_ACTION from '@routes/auth/store/auth.action';
import * as NOTIFICATON_ACTION from '@routes/notification/store/notification.action';

@Injectable({
  providedIn: 'root'
})
export class SetupService {
  constructor(private store: Store, private authenticationService: AuthenticationService) {}

  /**
   * It is used to get the necessary information and make the necessary checks before installing the APP.
   * Ex. User and Company information, Roles and Permissions, Token validations etc.
   */
  initialize(): Promise<void> {
    return new Promise(async (resolve, reject) => {
      // TODO: Clear metadata information from localstorage.
      // MetaDataUtil.clear();

      // Get access token and initialize the application.
      const authContext = AuthContextUtil.getAuthContext();

      // TODO: Create a strategy according to your authentication structure.
      // For example, If there is no token, redirect user to login page.
      // Or if the token has expired, refresh the token or log out the user.
      if (!authContext) {
        this.authenticationService.logout();
        resolve();
        return;
      }

      // Retrive user
      this.store.dispatch(AUTH_ACTION.getCurrentUserAction());

      // Retrive notifications
      this.store.dispatch(NOTIFICATON_ACTION.listNotificationsAction());

      resolve();
    });
  }
}
