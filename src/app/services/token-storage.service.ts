import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private TOKEN_KEY = 'token_jwt';
  constructor() { }

  public guardarToken(token: string) {
    window.sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  public getToken() {
    return window.sessionStorage.getItem(this.TOKEN_KEY);
  }

  public signout(){
    window.sessionStorage.clear();
  }
}
