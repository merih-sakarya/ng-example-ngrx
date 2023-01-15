import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as ACTION from './store/notification.action';
import * as SELECTOR from './store/notification.selector';

import { NotificationResponseModel } from '@shared/models/http/response/notification/notification-response.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html'
})
export class NotificationComponent implements OnInit {
  /** The notification list is already dispatched to ngrx/store while initializing App (@see SetupService). */
  notifications$: Observable<NotificationResponseModel[] | null> = this.store.select(SELECTOR.selectNotifications);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ACTION.setAllNotificationsAsReadAction());
  }

  delete(id: number) {
    this.store.dispatch(ACTION.deleteNotificationAction({ id }));
  }

  deleteAll() {
    this.store.dispatch(ACTION.deleteAllNotificationsAction());
  }
}
