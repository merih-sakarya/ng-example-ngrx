import { createReducer, on, createFeature } from '@ngrx/store';

import * as ACTION from './notification.action';
import { GenericState } from '@shared/models/common/generic-state.model';
import { NotificationResponseModel } from '@shared/models/http/response/notification/notification-response.model';

export interface NotificationsStateInterface extends GenericState<NotificationResponseModel[]> {}

const initialState: NotificationsStateInterface = {
  data: [],
  status: 'PENDING',
  error: null
};

export const notificationsFeature = createFeature({
  name: 'notifications',
  reducer: createReducer<NotificationsStateInterface>(
    initialState,
    // LIST all notifications
    on(
      ACTION.listNotificationsAction,
      (state): NotificationsStateInterface => ({
        ...state,
        status: 'LOADING',
        error: null
      })
    ),
    on(
      ACTION.listNotificationsSuccessAction,
      (state, { notifications }): NotificationsStateInterface => ({
        ...state,
        data: notifications,
        status: 'SUCCESS',
        error: null
      })
    ),
    on(
      ACTION.listNotificationsFailureAction,
      (state, { error }): NotificationsStateInterface => ({
        ...state,
        status: 'ERROR',
        error
      })
    ),
    // Create notification
    on(
      ACTION.createNotificationAction,
      (state): NotificationsStateInterface => ({
        ...state,
        status: 'LOADING',
        error: null
      })
    ),
    on(
      ACTION.createNotificationSuccessAction,
      (state, { notification }): NotificationsStateInterface => ({
        ...state,
        // prettier-ignore
        data: [notification, ...state.data!],
        status: 'SUCCESS',
        error: null
      })
    ),
    on(
      ACTION.createNotificationFailureAction,
      (state, { error }): NotificationsStateInterface => ({
        ...state,
        status: 'ERROR',
        error
      })
    ),
    // DELETE notification
    on(
      ACTION.deleteNotificationAction,
      (state): NotificationsStateInterface => ({
        ...state,
        status: 'LOADING',
        error: null
      })
    ),
    on(ACTION.deleteNotificationSuccessAction, (state, action): NotificationsStateInterface => {
      const notifications = state.data!.filter(h => h.id !== action.id);
      return {
        ...state,
        data: notifications,
        status: 'SUCCESS',
        error: null
      };
    }),
    on(
      ACTION.deleteNotificationFailureAction,
      (state, { error }): NotificationsStateInterface => ({
        ...state,
        status: 'ERROR',
        error
      })
    ),
    // DELETE all notifications
    on(
      ACTION.deleteAllNotificationsAction,
      (state): NotificationsStateInterface => ({
        ...state,
        status: 'LOADING',
        error: null
      })
    ),
    on(
      ACTION.deleteAllNotificationsSuccessAction,
      (state): NotificationsStateInterface => ({
        ...state,
        data: [],
        status: 'SUCCESS',
        error: null
      })
    ),
    on(
      ACTION.deleteAllNotificationsFailureAction,
      (state, { error }): NotificationsStateInterface => ({
        ...state,
        status: 'ERROR',
        error
      })
    ),
    // SET all notifications as read
    on(
      ACTION.setAllNotificationsAsReadAction,
      (state): NotificationsStateInterface => ({
        ...state,
        status: 'LOADING',
        error: null
      })
    ),
    on(ACTION.setAllNotificationsAsReadSuccessAction, (state): NotificationsStateInterface => {
      // This application was created to show how the redux/ngrx approach works.
      // Normally, we usually store date information such as "lastReadDate" as meta-data instead of "isUnread" to determine the read status of notifications.
      // For now, We set 'isUnread' to false for every object in the array.
      const notifications = state.data!.map(n => ({ ...n, isUnread: false }));
      return {
        ...state,
        data: notifications,
        status: 'SUCCESS',
        error: null
      };
    }),
    on(
      ACTION.setAllNotificationsAsReadFailureAction,
      (state, { error }): NotificationsStateInterface => ({
        ...state,
        status: 'ERROR',
        error
      })
    )
  )
});
