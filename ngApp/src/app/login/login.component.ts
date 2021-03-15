import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import {AuthService} from '../_Authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private fb: FormBuilder,
               private router: Router ,
               private auth: AuthService) { }

  LoginForm = this.fb.group({
                  email : ['' , [Validators.required , Validators.email] ] ,
                  password : ['' , [Validators.required , Validators.minLength(8)] ]
  });

  ngOnInit(): void {
  }

  loginUser(){
      this.auth.LoginUser(this.LoginForm.value).subscribe(
        res => {localStorage.setItem('token', res.token); // send data with key like res.token
                this.router.navigate(['/CreatPayment']);
        },
        (err) => console.log(err),

      ); }

  GotoReg(){
    this.router.navigate(['/signup']);
  }
}
