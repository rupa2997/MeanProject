import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public uiInvalidCredential = false;
  public fbFormGroup = this.fb.group({
    Email: ['', Validators.required],
    Password: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }
  ngOnInit(): void {
  }
  /*async loginProcessHere() {
    const data = this.fbFormGroup.value;
    console.log(data);
    const url = 'http://localhost:3200/auth-user';
    const result: any = await this.http.post(url, data).toPromise();
    console.log(result);
    if (result.opr) {
      console.log(data.Email);
      sessionStorage.setItem('sid', data.Email);
      this.router.navigate(['HomePage']);
    } else {
      this.uiInvalidCredential = true;
    }
  }*/

  async loginProcessHere() {
    const data = this.fbFormGroup.value;
    //console.log(data);
    const url = 'http://localhost:3200/auth-user';
    const result: any = await this.http.post(url, data).toPromise();
    //console.log(result.opr);
    if (result.opr) {
      //console.log("hii");
      sessionStorage.setItem('sid', data.Email);
      this.router.navigate(['HomePage']);
    }
    else {
      //alert("Id or Password is wrong!!")
      this.uiInvalidCredential = true;
    }
  }
}
