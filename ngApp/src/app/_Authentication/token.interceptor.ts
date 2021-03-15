import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService} from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const request = req.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.authService.getToken()}`,
          'Content-Type':  'application/json',
        })
      });

      return next.handle(request);
  }
}
