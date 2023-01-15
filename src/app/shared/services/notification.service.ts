import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedModule } from '@shared/shared.module';
import { environment } from '@env/environment';

import { NotificationRequestModel } from '@shared/models/http/request/notification/notification-request.model';
import { NotificationResponseModel } from '@shared/models/http/response/notification/notification-response.model';

@Injectable({
  providedIn: SharedModule
})
export class NotificationService {
  private apiUrl = `${environment.apiUrl}/${environment.apiVersion}`;

  constructor(private http: HttpClient) {}

  list(): Observable<NotificationResponseModel[]> {
    return this.http.get<NotificationResponseModel[]>(`${this.apiUrl}/notifications`);
  }

  create(notificationRequestModel: NotificationRequestModel): Observable<NotificationResponseModel> {
    return this.http.post<NotificationResponseModel>(`${this.apiUrl}/notifications`, notificationRequestModel);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/notifications/${id}`);
  }

  deleteAll(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/notifications`);
  }
}
