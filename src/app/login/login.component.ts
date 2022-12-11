import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Login } from '../models/login';
import { AuthenticationService } from '../services/authentication.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public login: Login = { username: '', password: '' }

  constructor(private auth: AuthenticationService, private location: Location, private tokenStorage: TokenStorageService) {
  }

  signin() {
    this.auth.login(this.login).subscribe({
      next: (res:any) => {
        this.tokenStorage.guardarToken(res.token);
        this.location.replaceState("/inicio")
        window.location.reload()
      },
      error: err => { 

      }
    })
  }
}
