import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { User } from './class/types';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  observe: 'response',
  withCredentials:true
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
  isAuthUrl = environment.apiUrl + 'login-page/is-auth';
  /**
   * login user
   */
  login(credentials: any): Observable<HttpResponse<User>> {
    return this.http.post<User>(this.authentificationUrl, credentials, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response'
    })
      .pipe(
        tap(val => {
          this.isLoggedIn = true;
        })

        // adding catch error handlers
        // );
      )

  }

  logout(): void {
    this.isLoggedIn = false;
  }
  
  isAuth(): Observable<any> {
    return this.http.get<any>(this.isAuthUrl, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }).pipe(
      tap(val => {
        this.isLoggedIn = true;
      })
    );
  }
}

