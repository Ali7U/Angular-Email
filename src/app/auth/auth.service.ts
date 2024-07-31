import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

interface usernameAvailableResponse {
  available: boolean;
}

export interface SignupCredentials {
  username: string | null;
  password: string;
  passwordConfirmation: string;
}

interface SignupResponse {
  username: string;
}

interface SignedinResponse {
  authenticated: boolean;
  username: string;
}

interface SigninCredentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = 'https://api.angular-email.com';
  signedIn$ = new BehaviorSubject<boolean | null>(null);
  username = '';

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<usernameAvailableResponse>(
      this.apiUrl + '/auth/username',
      {
        username,
      }
    );
  }

  signup(credentials: SignupCredentials) {
    return this.http
      .post<SignupResponse>(this.apiUrl + '/auth/signup', credentials)
      .pipe(
        tap(({ username }) => {
          this.signedIn$.next(true);
          this.username = username;
        })
      );
  }

  checkAuth() {
    return this.http.get<SignedinResponse>(`${this.apiUrl}/auth/signedin`).pipe(
      tap(({ authenticated, username }) => {
        this.signedIn$.next(authenticated);
        this.username = username;
      })
    );
  }

  signout() {
    return this.http.post(`${this.apiUrl}/auth/signout`, {}).pipe(
      tap(() => {
        this.signedIn$.next(false);
      })
    );
  }

  signin(credentials: SigninCredentials) {
    return this.http
      .post<SigninCredentials>(`${this.apiUrl}/auth/signin`, credentials)
      .pipe(
        tap(({ username }) => {
          this.signedIn$.next(true);
          this.username = username;
        })
      );
  }
}
