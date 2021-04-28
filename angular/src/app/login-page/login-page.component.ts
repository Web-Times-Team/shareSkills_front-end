import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaButInfType, UsernameField } from '@web-times-team/angular-web-times-tools';
import { AuthentificationService } from '../authentification.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  mediasButInfTypes: MediaButInfType[] = [MediaButInfType.facebook, MediaButInfType.google, MediaButInfType.linkedIn];
  usernameField = UsernameField[1];
  forgotPasswordRoute='';
  signupRoute ='registration'
  constructor(private authentification: AuthentificationService, private router :Router) { }

  ngOnInit(): void {
  }
  /**
   * authentifie users
   */
  authentificate(credentials: any): void {
    this.authentification.authentificate(credentials).subscribe(user => {
      this.router.navigate(['collaborations']);
    },
      error => {
        console.log(error);
      // handler error
      }

    )
  }
}
