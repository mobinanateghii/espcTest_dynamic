import {AfterContentInit, Component, DoCheck, OnChanges, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {IPay} from '../ipay';
import {PaymentDataService} from '../_services/payment-data.service';
import {Router} from '@angular/router';
import {concat} from 'rxjs';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})

export class PaymentsComponent implements OnInit {
  constructor( private PayDataService: PaymentDataService ,
               private router: Router) { }

  displayedColumns = this.PayDataService.displayedColumns;
  dataSource ;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;



  ngOnInit() {
    this.PayDataService.getPaymentData().subscribe(
      res => this.PayDataService.ELEMENT_DATA = res,
      err => console.log(err),
      () => {
        this.dataSource = new MatTableDataSource<IPay>(this.PayDataService.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
