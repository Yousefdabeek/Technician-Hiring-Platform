import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {LoginPageComponent} from '../User Roles & Authentication-yousef/Login/login-page/login-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'thp-platform';
}
