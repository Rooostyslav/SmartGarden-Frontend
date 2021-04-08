import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SMART_GARDEN_AUTH_API } from 'src/app/app-injections-tokens';
import { tap } from 'rxjs/operators';
import { LoginModel } from 'src/models/user/login-model';

export const ACCESS_TOKEN_KEY = '';

@Injectable({
    providedIn: 'root'
  })
export class AuthService {

  private baseAuthApiUrl: string = this.apiAuthUrl + '/api/auth/login'; 

  constructor(
    private http: HttpClient,
    @Inject(SMART_GARDEN_AUTH_API) private apiAuthUrl: string,
    private router: Router
  ) {}

  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    return authToken != null;
  }

  getToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }

  login(login: LoginModel) {
    return this.http.post<any>(this.baseAuthApiUrl, login
      ).pipe(
        tap(token => {
          localStorage.setItem(ACCESS_TOKEN_KEY, token.access_token);
        })
      )
  }

  logout() {
    const removeToken = localStorage.removeItem(ACCESS_TOKEN_KEY);
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }
}