import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  form:FormGroup;

  constructor(private fb:FormBuilder, 
               private _http: HttpService, 
               private router: Router) {

      this.form = this.fb.group({
          username: [''],
          password: ['']
      });
  }

  login() {
      const val = this.form.value;

      if (val.username && val.password) {
          this._http.login(val.username, val.password)
              .subscribe(
                  () => {
                      this.router.navigateByUrl('/');
                  }
              );
      }
  }

}
