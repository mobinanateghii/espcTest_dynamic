import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Constants} from './Constants';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ,
               private router: Router) { }

      RegisterUser(user): Observable<any>{
          return this.http.post(Constants.REGISTER_URL , user);
      }

      LoginUser(user): Observable<any>{
        return this.http.post(Constants.LOGIN_URL , user);
      }

      isLoggedIn(): boolean{
        return !!localStorage.getItem('token'); // its always return true or false
      }

      getToken(){
        return localStorage.getItem('token');
      }

      logoutUser(){
        localStorage.removeItem('token');
        this.router.navigate(['/payments']);
      }



}
