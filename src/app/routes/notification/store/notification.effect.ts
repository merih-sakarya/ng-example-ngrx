import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { NotificationService } from '@shared/services/notification.service';

import * as ACTION from './notification.action';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class NotificationEffect {
  // to define an Effect, use the `createEffect` method
  listNotifications$ = createEffect(() => {
    return this.actions$.pipe(
      // filter out the actions, except for '[Notifications] List Notifications'
      ofType(ACTION.listNotificationsAction),
      mergeMap(() => {
        // call the service
        return this.notificationService.list().pipe(
          map(notifications => {
            // return a Success action when the HTTP request was successfull
            return ACTION.listNotificationsSuccessAction({ notifications });
          }),
          catchError((err: HttpErrorResponse) => {
            // return a Failed action when something went wrong during the HTTP request
            return of(ACTION.listNotificationsFailureAction(err));
          })
        );
      })
    );
  });

  // to define an Effect, use the `createEffect` method
  createNotification$ = createEffect(() => {
    return this.actions$.pipe(
      // filter out the actions, except for '[Notifications] Delete Notifications'
      ofType(ACTION.createNotificationAction),
      mergeMap(action => {
        // call the service
        return this.notificationService.create(action.notification).pipe(
          map(notification => {
            // return a Success action when the HTTP request was successfull
            return ACTION.createNotificationSuccessAction({ notification });
          }),
          catchError((err: HttpErrorResponse) => {
            // return a Failed action when something went wrong during the HTTP request
            return of(ACTION.createNotificationFailureAction(err));
          })
        );
      })
    );
  });

  // to define an Effect, use the `createEffect` method
  deleteNotification$ = createEffect(() => {
    return this.actions$.pipe(
      // filter out the actions, except for '[Notifications] Delete Notifications'
      ofType(ACTION.deleteNotificationAction),
      mergeMap(action => {
        // call the service
        return this.notificationService.delete(action.id).pipe(
          map(() => {
            // return a Success action when the HTTP request was successfull
            return ACTION.deleteNotificationSuccessAction({ id: action.id });
          }),
          catchError((err: HttpErrorResponse) => {
            // return a Failed action when something went wrong during the HTTP request
            return of(ACTION.deleteNotificationFailureAction(err));
          })
        );
      })
    );
  });

  // to define an Effect, use the `createEffect` method
  deleteAllNotifications$ = createEffect(() => {
    return this.actions$.pipe(
      // filter out the actions, except for '[Notifications] Delete Notifications'
      ofType(ACTION.deleteAllNotificationsAction),
      mergeMap(() => {
        // call the service
        return this.notificationService.deleteAll().pipe(
          map(() => {
            // return a Success action when the HTTP request was successfull
            return ACTION.deleteAllNotificationsSuccessAction();
          }),
          catchError((err: HttpErrorResponse) => {
            // return a Failed action when something went wrong during the HTTP request
            return of(ACTION.deleteAllNotificationsFailureAction(err));
          })
        );
      })
    );
  });

  // to define an Effect, use the `createEffect` method
  updateNotificationsMetadata$ = createEffect(() => {
    return this.actions$.pipe(
      // filter out the actions, except for '[Notifications] Delete Notifications'
      ofType(ACTION.setAllNotificationsAsReadAction),
      map(() => {
        // TODO: call the service to update notifications meta-data (lastReadDate etc.)
        return ACTION.setAllNotificationsAsReadSuccessAction();
      })
    );
  });

  constructor(private actions$: Actions, private notificationService: NotificationService) {}
}
