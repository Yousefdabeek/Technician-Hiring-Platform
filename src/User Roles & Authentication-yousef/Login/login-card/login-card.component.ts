import { Component } from '@angular/core';
import {SocialLoginComponent} from '../social-login/social-login.component';
import {LoginFormComponent} from '../login-form/login-form.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login-card',
  imports: [
    SocialLoginComponent,
    LoginFormComponent,
    RouterLink
  ],
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css'
})
export class LoginCardComponent {

}
