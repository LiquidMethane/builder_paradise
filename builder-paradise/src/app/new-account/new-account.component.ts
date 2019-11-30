import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

  form: FormGroup;
  message: Object;

  constructor(private fb: FormBuilder,
    private _http: HttpService,
    private router: Router) {
    this.form = this.fb.group({
      username: [''],
      email: [''],
      password: ['']
    });
  }

  ngOnInit() {
  }

  // Register a user 
  createAccount() {
    const val = this.form.value;

    if (val.username && val.password) {
      this._http.createAccount(val.username, val.email, val.password)
        .subscribe(
          (data) => {
              this.router.navigate(['/']);
          },
            (error: HttpErrorResponse) => {
              this.message = error; 
            }
          );
    }
  }

}
