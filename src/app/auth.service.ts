import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInKey = 'loggedIn';
  private tokenKey = 'authToken';

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string }>('http://localhost:5242/api/auth/login', { username, password })
      .pipe(
        map(response => {
          if (response.token) {
            if (isPlatformBrowser(this.platformId)) {
              localStorage.setItem(this.tokenKey, response.token);
            }
            return true;
          } else {
            return false;
          }
        }),
        catchError(error => {
          console.error('Login error:', error);
          return of(false);
        })
      );
  }
  

  isLoggedIn(): Observable<boolean> {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem(this.tokenKey);
      const isLoggedIn = token !== null && !this.jwtHelper.isTokenExpired(token);
      return of(isLoggedIn);
    }
    return of(false);
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.tokenKey);
    }
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }
}
