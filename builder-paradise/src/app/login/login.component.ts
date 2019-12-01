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

  constructor(private fb: FormBuilder, private _http: HttpService, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
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
