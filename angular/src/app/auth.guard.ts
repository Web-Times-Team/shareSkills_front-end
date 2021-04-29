import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {


  constructor(private authentification: AuthentificationService, private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.activeLoginPage(state.url);
  }

  canLoad(route: Route): boolean {
    const url = `/${route.path}`;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authentification.isLoggedIn) {
      return true;
    }
    // Store the attempted URL for redirecting
    this.authentification.redirectUrl = url;
    console.log(url);
    // Navigate to the login page
    this.router.navigate(['loginpage']);
    return false;
  }

  activeLoginPage(url: string): boolean {

    if (!this.authentification.isLoggedIn) {
      return true;
    }

    console.log(url);
    // Navigate to the login page
    this.router.navigate([url]);
    return false;
  }
}

