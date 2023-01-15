import { NotificationStatusEnum } from '@shared/enums/notification-status.enum';

export class NotificationResponseModel {
  id!: number;
  status!: NotificationStatusEnum;
  message!: string;
  isUnread!: boolean;
}
