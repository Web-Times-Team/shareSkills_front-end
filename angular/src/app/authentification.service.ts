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

  authentificationUrl = environment.apiUrl + 'login-page/login';
  /**
   * authentificate users
   */
  authentificate(credentials: any): Observable<User> {
    return this.http.post<any>(this.authentificationUrl, credentials, httpOptions)
      .pipe(
        // adding catch error handlers
      );
  }
}
/**
 * A quoi sert environnement. Indiquer les variables qui dependent, du mode de démarrage (production ou developpement). when app run in development mode environnement.ts will be replace by environment.prod.ts  
 * Building and serving Angular apps
 */