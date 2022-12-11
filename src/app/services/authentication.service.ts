import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url: string = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) { }

  public login(login: Login) {
    return this.http.post(`${this.url}/login`, login);
  }

  
}
