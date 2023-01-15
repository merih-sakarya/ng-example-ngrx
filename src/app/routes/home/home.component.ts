import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoremIpsum } from 'lorem-ipsum';

import * as NOTIFICATON_ACTION from '@routes/notification/store/notification.action';
import { NotificationStatusEnum } from '@shared/enums/notification-status.enum';
import { NotificationRequestModel } from '@shared/models/http/request/notification/notification-request.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  /**
   * This application was created to show how the redux/ngrx approach works.
   * In real world applications, new notifications usually come via websockets.
   */
  notify() {
    // Generate a sentence of dummy text
    const message = new LoremIpsum().generateSentences(1);
    // Create a notification object
    const notification = new NotificationRequestModel(NotificationStatusEnum.LEVEL1, message, true);
    // Dispatch an action to create a new notification in the application state
    this.store.dispatch(NOTIFICATON_ACTION.createNotificationAction({ notification }));
  }
}
