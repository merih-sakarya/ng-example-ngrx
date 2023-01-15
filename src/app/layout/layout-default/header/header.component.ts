import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as AUTH_ACTION from '@routes/auth/store/auth.action';
import * as AUTH_SELECTOR from '@routes/auth/store/auth.selector';
import * as NOTIFICATION_SELECTOR from '@routes/notification/store/notification.selector';

import { UserResponseModel } from '@shared/models/http/response/user/user-response.model';
import { NotificationResponseModel } from '@shared/models/http/response/notification/notification-response.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  /** `currentUser` and `notifications` are already dispatched to the store while initializing the App (@see SetupService). */
  currentUser$: Observable<UserResponseModel | null> = this.store.select(AUTH_SELECTOR.selectCurrentUser);
  unreadNotifications$: Observable<NotificationResponseModel[] | null> = this.store.select(
    NOTIFICATION_SELECTOR.selectUnreadNotifications
  );

  constructor(private store: Store) {}

  ngOnInit(): void {}

  logout() {
    this.store.dispatch(AUTH_ACTION.logoutAction());
  }
}
