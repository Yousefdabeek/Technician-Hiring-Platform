import { Component } from '@angular/core';
import {SignInFormComponent} from '../sign-in-form/sign-in-form.component';
import {SocialSignInComponent} from '../social-sign-in/social-sign-in.component';

@Component({
  selector: 'app-sign-in-card',
  imports: [
    SignInFormComponent,
    SocialSignInComponent
  ],
  templateUrl: './sign-in-card.component.html',
  styleUrl: './sign-in-card.component.css'
})
export class SignInCardComponent {

}
