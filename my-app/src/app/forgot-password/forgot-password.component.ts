import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  //abc = new FormInput();
  public uiInvalidCredential = false;
  fbFormGroup = this.fb.group({

    Email: ['', Validators.required],
    Password: ['', Validators.required],
    CPassword: ['', Validators.required],

  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,

  ) { }
  ngOnInit(): void {
  }

  async onResetPwd() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3200/update-user';
    const result: any = await this.http.post(url, data).toPromise();
    if (result.opr) {
      //sessionStorage.setItem('sid', 'true');
      this.router.navigate(['LoginPage']);
    } else {
      this.uiInvalidCredential = true;
    }
  }
}
