import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';
import {AuthService} from '../_Authentication/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private auth: AuthService ,
              private router: Router) {}


  SignUpForm = this.fb.group({
                    username: ['', Validators.required],
                    email: ['', [Validators.required, Validators.email]],
                    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  ngOnInit(): void {

  }

  registerUser(){
    // return it as object
   // console.log(this.SignUpForm.value);
    const data = this.SignUpForm.value;
    this.auth.RegisterUser(data).subscribe(
      res => {localStorage.setItem('token' , res.token);
              this.router.navigate(['/login']);
              },
      (err) => console.log(err)
    );
  }
}
