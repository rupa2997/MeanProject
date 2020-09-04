import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {


  public uiInvalidCredential = false;
  public fbFormGroup = this.fb.group({

    Username: ['', Validators.required],
    Email: ['', Validators.required],
    Password: ['', Validators.required],
    CPassword: ['', Validators.required],
    Mobile_No: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  /*async registerHere() {
    const data = this.fbFormGroup.value;
    if (data.Password === data.CPassword) {
      const url = 'http://localhost:3200/adduser';

      await this.http.post(url, data).toPromise();

      this.router.navigate(['LoginPage']);
    }
    else {
      alert("Password and Confirm Password Field Doesn't Match");
    }
  }*/
  async registerHere() {
    const data = this.fbFormGroup.value;
    //console.log(data.mobile.indexOf('@'))
    if (data.Email.indexOf('@') === 0 || (data.Email.indexOf('.') !== data.Email.length - 3 && data.Email.indexOf('.') !== data.Email.length - 4)) {
      alert("Please Enter Valid Email Id");
    }
    else if (data.Mobile_No.length !== 10 || isNaN(data.Mobile_No)) {
      alert("Please Enter 10 Digit Mobile Number");
    }
    else if (data.Password.length < 4 || data.Password.length > 15) {
      alert("please enter Password lenght min is 8 and max is 15")

    }
    else if (data.Password !== data.CPassword) {
      alert("Password And Confirm Password Are Not Match");
    }
    else {
      const url1 = 'http://localhost:3200/emailvarification';
      const result: any = await this.http.post(url1, data).toPromise();
      console.log(result);
      if (!result.opr) {
        const url = 'http://localhost:3200/adduser';
        await this.http.post(url, data).toPromise();
        this.router.navigate(['LoginPage']);
      }
      else {
        alert("you are already registered");
        //this.uiInvalidCredential = true;
      }

    }

  }

  loginpage() {
    this.router.navigate(['LoginPage']);
  }

}
