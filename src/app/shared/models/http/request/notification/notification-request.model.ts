import { NotificationStatusEnum } from '@shared/enums/notification-status.enum';

export class NotificationRequestModel {
  constructor(status: NotificationStatusEnum, message: string, isUnread: boolean) {
    this.status = status;
    this.message = message;
    this.isUnread = isUnread;
  }

  status!: NotificationStatusEnum;
  message!: string;
  isUnread!: boolean;
}
