import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
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

  constructor(private http: HttpClient) { }

  autentificationUrl = environment.apiUrl + 'login-page/login';
  /**
   * authentificate users
   */
  authentificate(credentials: any): Observable<User> {
    console.log(credentials);
    return this.http.post<any>(this.autentificationUrl, credentials, httpOptions)
      .pipe(
        // adding catch error handlers
      );
  }
}
