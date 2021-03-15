import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {IPay} from '../ipay';
import {MatPaginator} from '@angular/material/paginator';
import {PaymentDataService} from '../_services/payment-data.service';


@Component({
  selector: 'app-creat-payment',
  templateUrl: './creat-payment.component.html',
  styleUrls: ['./creat-payment.component.css']
})
export class CreatPaymentComponent implements OnInit {


  constructor( private fb: FormBuilder , private PayDataService: PaymentDataService) { }

  displayedColumns = this.PayDataService.displayedColumns;
  ServiceProviderNames = this.PayDataService.ServiceProvidernames;
  dataSource ;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  CreatPayForm = this.fb.group({
                      Form_key: ['' , Validators.required] ,
                      name: ['', Validators.required],
                      Service_Provider: ['', Validators.required] ,
                      Description: ['', Validators.required]
  });



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

  CreatPayment(){
    const data: IPay = this.CreatPayForm.value;
    console.log(data);
    this.PayDataService.creatPaymentData(data).subscribe(
      err => console.log(err)
    );
  }

  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

