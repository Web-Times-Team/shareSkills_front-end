import { Component, OnInit } from '@angular/core';
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
  constructor(private authentification: AuthentificationService) { }

  ngOnInit(): void {
  }
  /**
   * authentifie users
   */
  authentificate(credentials: any): void {
    this.authentification.authentificate(credentials).subscribe(user => {
      console.log(user);
      // add routing to collaborations modules
    },
      error => {
        console.log(error);
      // display error message
      }

    )
  }
}
