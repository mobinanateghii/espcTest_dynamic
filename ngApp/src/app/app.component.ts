import {Component, OnInit} from '@angular/core';
import {PaymentDataService} from './_services/payment-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'work';

  constructor(public PayDataService: PaymentDataService) {
  }
  ngOnInit() {
    // this.PayDataService.getPaymentData().subscribe(
    //   res => this.PayDataService.ELEMENT_DATA = res,
    //   err => console.log(err)
    // );
  }


}
