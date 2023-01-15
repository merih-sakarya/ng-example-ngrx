import { HttpErrorResponse } from '@angular/common/http';

export type GenericStoreStatus = 'PENDING' | 'LOADING' | 'SUCCESS' | 'ERROR';

export interface GenericState<T> {
  data: T | null;
  status: GenericStoreStatus;
  error: HttpErrorResponse | null;
}
