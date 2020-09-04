import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-fruits-vegetables',
  templateUrl: './fruits-vegetables.component.html',
  styleUrls: ['./fruits-vegetables.component.css']
})
export class FruitsVegetablesComponent implements OnInit {
  public data1: any = []
  constructor(private router: Router,
    private http: HttpClient) {

  }

  ngOnInit(): void {
    this.load2()
    if (!sessionStorage.getItem('sid')) {
      this.router.navigate(['LoginPage']);
    }
  }
  async load2() {
    const url = "http://localhost:3200/getdataFruit"
    let done: any = await this.http.get(url).toPromise();
    this.data1 = done
    console.log(this.data1)
  }

}
