import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BuyNowComponent } from '../buy-now/buy-now.component';
//import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-home-living',
  templateUrl: './home-living.component.html',
  styleUrls: ['./home-living.component.css']
})
export class HomeLivingComponent implements OnInit {
  public data2: any = []
  constructor(

    private router: Router,
    private http: HttpClient,
    private modelservice: NgbModal,
  ) { }

  ngOnInit(): void {
    this.load2()
    if (!sessionStorage.getItem('sid')) {
      this.router.navigate(['LoginPage']);
    }
  }

  async load2() {
    const url = "http://localhost:3200/getdata"
    let done: any = await this.http.get(url).toPromise();
    this.data2 = done
    console.log(this.data2)
  }
  BuyNow(item) {
    const BuyItem = this.modelservice.open(BuyNowComponent);
    BuyItem.componentInstance.data = item;
  }
  added() {
    let ru = sessionStorage.getItem('sid')
    console.log(ru);

  }

}
