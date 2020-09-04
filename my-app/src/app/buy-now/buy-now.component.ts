import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.css']
})
export class BuyNowComponent implements OnInit {
  @Input() data
  constructor(private ActiveModal: NgbActiveModal, private router: Router,
    private http: HttpClient) { }
  /*close()
  {
   ActiveModal.dismiss('Cross click');
  }*/

  ngOnInit(): void {
    console.log(this.data);
  }
  async BuyNow() {
    var data1 = this.data;
    const url = 'http://localhost:3200/addproduct';
    await this.http.post(url, data1).toPromise();
  }

}
