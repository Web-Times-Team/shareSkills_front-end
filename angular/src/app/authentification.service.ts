import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { User } from './class/types';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {

  isLoggedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  constructor(private http: HttpClient) { }

  authentificationUrl = environment.apiUrl + 'login-page/login';
  /**
   * login user
   */
  login(credentials: any): Observable<User> {
    return this.http.post<any>(this.authentificationUrl, credentials, httpOptions)
      .pipe(
        tap(val => this.isLoggedIn = true)
        // adding catch error handlers
      );
  }

  logout(): void {
    this.isLoggedIn = false;
  }

}

