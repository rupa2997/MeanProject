import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router) { }



  ngOnInit(): void {
    if (!sessionStorage.getItem('sid')) {
      this.router.navigate(['LoginPage']);
    }
  }

  processLogout() {

    sessionStorage.removeItem('sid');

    this.router.navigate(['LoginPage']);



  }
}
