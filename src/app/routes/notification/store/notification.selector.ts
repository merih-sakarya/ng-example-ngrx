import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NotificationsStateInterface } from './notification.reducer';

export const selectFeatureSelector = createFeatureSelector<NotificationsStateInterface>('notifications');

export const selectNotifications = createSelector(
  selectFeatureSelector,
  (listNotificationsState: NotificationsStateInterface) => listNotificationsState.data
);

export const selectNotificationsLoading = createSelector(
  selectFeatureSelector,
  (listNotificationsState: NotificationsStateInterface) => listNotificationsState.status === 'LOADING'
);

export const selectNotificationsError = createSelector(
  selectFeatureSelector,
  (listNotificationsState: NotificationsStateInterface) => listNotificationsState.error
);

// This application was created to show how the redux/ngrx approach works.
// Normally, we usually store date information such as "lastReadDate" as meta-data instead of "isUnread" to determine the read status of notifications.
export const selectUnreadNotifications = createSelector(
  selectFeatureSelector,
  (listUnreadNotificationsState: NotificationsStateInterface) => listUnreadNotificationsState.data!.filter(item => item.isUnread)
);
