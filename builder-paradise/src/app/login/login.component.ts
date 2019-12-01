import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  singup: boolean = false;
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private _http: HttpService, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  signUp() {
    const val = this.signupForm.value;

    if (val.username && val.password && val.email) {
      this._http.signup(val.username, val.email, val.password).subscribe(result => {
        this.router.navigateByUrl('/login');
      },
      err => {
        alert('Sign Up Failed.');
      }
      )
    }
  }

  login() {
    const val = this.form.value;

    if (val.username && val.password) {
      this._http.login(val.username, val.password).subscribe(result => {
        sessionStorage.setItem('user_id', result['user_id']);
        sessionStorage.setItem('user_nickname', result['user_nickname']);
        this.router.navigateByUrl('/');
      },
        err => {
          alert(err.error);
        }
      )
    }
  }

  ngOnInit() {

  }

}
