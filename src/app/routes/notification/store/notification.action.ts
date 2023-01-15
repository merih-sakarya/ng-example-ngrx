import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { NotificationRequestModel } from '@shared/models/http/request/notification/notification-request.model';
import { NotificationResponseModel } from '@shared/models/http/response/notification/notification-response.model';
import { NotificationActionTypeEnum } from './notification-action-type.enum';

/****************************************
 * List all notifications
 ****************************************/
export const listNotificationsAction = createAction(NotificationActionTypeEnum.LIST_NOTIFICATIONS);
export const listNotificationsSuccessAction = createAction(NotificationActionTypeEnum.LIST_NOTIFICATIONS_SUCCESS, props<{ notifications: NotificationResponseModel[] }>());
export const listNotificationsFailureAction = createAction(NotificationActionTypeEnum.LIST_NOTIFICATIONS_FAILURE, props<{ error: HttpErrorResponse }>());

/****************************************
 * Create notification
 ****************************************/
export const createNotificationAction = createAction(NotificationActionTypeEnum.CREATE_NOTIFICATION, props<{ notification: NotificationRequestModel }>());
export const createNotificationSuccessAction = createAction(NotificationActionTypeEnum.CREATE_NOTIFICATION_SUCCESS, props<{ notification: NotificationResponseModel }>());
export const createNotificationFailureAction = createAction(NotificationActionTypeEnum.CREATE_NOTIFICATION_FAILURE, props<{ error: HttpErrorResponse }>());

/****************************************
 * Delete a notification
 ****************************************/
export const deleteNotificationAction = createAction(NotificationActionTypeEnum.DELETE_NOTIFICATION, props<{ id: number }>());
export const deleteNotificationSuccessAction = createAction(NotificationActionTypeEnum.DELETE_NOTIFICATION_SUCCESS, props<{ id: number }>());
export const deleteNotificationFailureAction = createAction(NotificationActionTypeEnum.DELETE_NOTIFICATION_FAILURE, props<{ error: HttpErrorResponse }>());

/****************************************
 * Delete all notifications
 ****************************************/
export const deleteAllNotificationsAction = createAction(NotificationActionTypeEnum.DELETE_ALL_NOTIFICATIONS);
export const deleteAllNotificationsSuccessAction = createAction(NotificationActionTypeEnum.DELETE_ALL_NOTIFICATIONS_SUCCESS);
export const deleteAllNotificationsFailureAction = createAction(NotificationActionTypeEnum.DELETE_ALL_NOTIFICATIONS_FAILURE, props<{ error: HttpErrorResponse }>());

/****************************************
 * Set All Notifications As Read
 ****************************************/
export const setAllNotificationsAsReadAction = createAction(NotificationActionTypeEnum.SET_ALL_NOTIFICATIONS_AS_READ);
export const setAllNotificationsAsReadSuccessAction = createAction(NotificationActionTypeEnum.SET_ALL_NOTIFICATIONS_AS_READ_SUCCESS);
export const setAllNotificationsAsReadFailureAction = createAction(NotificationActionTypeEnum.SET_ALL_NOTIFICATIONS_AS_READ_FAILURE, props<{ error: HttpErrorResponse }>());
