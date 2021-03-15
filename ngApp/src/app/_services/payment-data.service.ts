import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../edit-payment/dialog/dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Constants} from '../_Authentication/Constants';
import {Observable} from 'rxjs';


const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
@Injectable({
  providedIn: 'root'
})


export class PaymentDataService {

  ELEMENT_DATA = [];
  ServiceProvidernames = ['Mellat Bank', 'Passargard Bank' , 'Melli Bank' , 'Ayande Bank' , 'Sina Bank' ];
  displayedColumns: string[] = ['Form_key', 'name', 'Service_Provider', 'Description'];



  constructor(private dialog: MatDialog ,
              private snackBar: MatSnackBar,
              private http: HttpClient,
              ) { }


        getHeaders(): HttpHeaders {
          return new HttpHeaders({
            'Content-Type':  'application/json',
          });
        }
        getOptions() {
          return {headers: this.getHeaders(), observe: 'response' as 'body'};
        }
        findId(data){
          const fin = this.ELEMENT_DATA.find(x => x.Form_key === data.Form_key &&
                                                      x.Service_Provider === data.Service_Provider );
          return fin._id;
        }
        getOnePay(data){
          const fin = this.ELEMENT_DATA.find(x => x.Form_key === data.Form_key &&
                                                      x.Service_Provider === data.Service_Provider );
          return fin;
        }



        getPaymentData(): Observable<any>{
          return this.http.get(Constants.PAYMENT_DATA);
        }
        creatPaymentData(data): Observable<any>{
          return this.http.post(Constants.PAYMENT_DATA + '/creatData' , data  , {headers}); // function?
        }

        deletePaymentData(id): Observable<any>{
          return this.http.delete( Constants.PAYMENT_DATA + '/' + id + '/delete');
        }
        updatePaymentData(data , id): Observable<any>{
          return this.http.patch(Constants.PAYMENT_DATA + '/' + id + '/edit', data);
        }


        updateHelper(naiveData , id){
            // date =  data.form_key & data.service Provider
          const pay = this.getOnePay(naiveData);
          const dialogRef =  this.dialog.open(DialogComponent , {data : pay});
          dialogRef.afterClosed().subscribe(result => {
                                                              this.updatePaymentData(result , id).subscribe(
                                                                (res) => console.log(res),
                                                                (err) => console.log(err)
                                                              );
                                                            });
          }




}
