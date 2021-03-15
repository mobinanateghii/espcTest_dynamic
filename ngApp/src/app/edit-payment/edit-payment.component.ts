import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {PaymentDataService} from '../_services/payment-data.service';
import {IPay} from '../ipay';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {ErrorsComponent} from '../_Errors/errors/errors.component';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-edit-payment',
  templateUrl: './edit-payment.component.html',
  styleUrls: ['./edit-payment.component.css']
})

export class EditPaymentComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private PayDataService: PaymentDataService,
              private snackBar: MatSnackBar) {
  }

  serviceProviderNames = this.PayDataService.ServiceProvidernames;
  displayedColumns = this.PayDataService.displayedColumns;
  dataSource ;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  DeletePayForm = this.fb.group({
                        Form_key: ['', Validators.required],
                        name: ['', Validators.required],
                        Service_Provider: ['', Validators.required],
  });

  EditPayForm = this.fb.group({
                      Form_key: ['', Validators.required],
                      Service_Provider: ['', Validators.required],
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

  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  Delete_Data() {
    const data = this.DeletePayForm.value;
    const id = this.PayDataService.findId(data);
    this.PayDataService.deletePaymentData(id).subscribe(
      res => console.log('delete successfully'),
      err => { this.snackBar.openFromComponent(ErrorsComponent , {duration: 2000 , data: {message : err} }); }
    );
  }


  Edit_Data(){
    const data = this.EditPayForm.value;
    const id = this.PayDataService.findId(data);
    this.PayDataService.updateHelper(data , id);
  }


}

