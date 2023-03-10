import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { environment } from '@env/environment';

import { UserContextUtil } from '@shared/utils/user-context.util';
import { AuthContextUtil } from '@shared/utils/auth-context.util';

import { UserService } from './user.service';
import { StorageService } from './local-storage.service';

import { AuthContextModel } from '@shared/models/security/auth-context.model';
import { UserResponseModel } from '@shared/models/http/response/user/user-response.model';
import { LoginRequestModel } from '@shared/models/http/request/auth/login-request.model';
import { RegisterRequestModel } from '@shared/models/http/request/auth/register-request.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = `${environment.apiUrl}/${environment.apiVersion}`;

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
    private storageService: StorageService
  ) {}

  login(loginRequestModel: LoginRequestModel): Observable<UserResponseModel> {
    return this.http.post<AuthContextModel>(`${this.apiUrl}/token`, loginRequestModel).pipe(
      tap((authContext: AuthContextModel) => {
        // Set AuthContext.
        AuthContextUtil.setAuthContext(authContext);
      }),
      switchMap(() =>
        this.userService.getUser().pipe(
          tap((userContext: UserResponseModel) => {
            // Set UserContext.
            UserContextUtil.setUserContext(userContext);
          })
        )
      )
    );
  }

  register(registerRequestModel: RegisterRequestModel): Observable<UserResponseModel> {
    return this.http.post<UserResponseModel>(`${this.apiUrl}/signup`, registerRequestModel);
  }

  logout() {
    this.storageService.clear();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    // TODO: Check if the token exists and is valid.
    if (AuthContextUtil.getAuthContext()) {
      return true;
    }
    return false;
  }
}
