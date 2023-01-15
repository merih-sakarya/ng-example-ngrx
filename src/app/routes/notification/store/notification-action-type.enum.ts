export enum NotificationActionTypeEnum {
  // LIST All Notifications
  LIST_NOTIFICATIONS = '[Notifications] List Notifications',
  LIST_NOTIFICATIONS_SUCCESS = '[Notifications] List Notifications success',
  LIST_NOTIFICATIONS_FAILURE = '[Notifications] List Notifications failure',

  // CREATE Notification
  CREATE_NOTIFICATION = '[Notifications] Create Notification',
  CREATE_NOTIFICATION_SUCCESS = '[Notifications] Create Notification success',
  CREATE_NOTIFICATION_FAILURE = '[Notifications] Create Notification failure',

  // DELETE Notification
  DELETE_NOTIFICATION = '[Notifications] Delete Notification',
  DELETE_NOTIFICATION_SUCCESS = '[Notifications] Delete Notification success',
  DELETE_NOTIFICATION_FAILURE = '[Notifications] Delete Notification failure',

  // DELETE All Notifications
  DELETE_ALL_NOTIFICATIONS = '[Notifications] Delete All Notifications',
  DELETE_ALL_NOTIFICATIONS_SUCCESS = '[Notifications] Delete All Notifications success',
  DELETE_ALL_NOTIFICATIONS_FAILURE = '[Notifications] Delete All Notifications failure',

  // SET All Notifications as Read
  SET_ALL_NOTIFICATIONS_AS_READ = '[Notifications] Set All Notifications As Read',
  SET_ALL_NOTIFICATIONS_AS_READ_SUCCESS = '[Notifications] Set All Notifications As Read success',
  SET_ALL_NOTIFICATIONS_AS_READ_FAILURE = '[Notifications] Set All Notifications As Read failure'
}
