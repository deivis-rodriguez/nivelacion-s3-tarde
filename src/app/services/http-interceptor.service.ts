import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { TokenStorageService } from "./token-storage.service";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private tokenStorage: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let reqFinal;
    const token = this.tokenStorage.getToken();
    if (token != null) {
      reqFinal = req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) });
    } else {
      reqFinal = req;
    }
    return next.handle(reqFinal);
  }
}
