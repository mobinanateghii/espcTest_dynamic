import { Injectable , Injector} from '@angular/core';
import {HttpInterceptor ,   HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler ){
    const authService = this.injector.get(AuthService);
    const request  = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`,
      }
    });
    return next.handle(request);

  }
}
