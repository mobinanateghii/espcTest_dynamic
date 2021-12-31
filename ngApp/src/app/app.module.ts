import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {  PaymentsComponent } from './payments/payments.component';
import { CreatPaymentComponent } from './creat-payment/creat-payment.component';
import { EditPaymentComponent } from './edit-payment/edit-payment.component';
import { DialogComponent } from './edit-payment/dialog/dialog.component';
import { ErrorsComponent } from './_Errors/errors/errors.component';
import { PanelComponent } from './panel/panel.component';
import {AuthService} from './_Authentication/auth.service';
import {PaymentDataService} from './_services/payment-data.service';
import {AuthGuard} from './_Authentication/auth.guard';
import {TokenInterceptorService} from './_Authentication/token-interceptor.service';
import {TokenInterceptor} from './_Authentication/token.interceptor';
import {MapComponent} from './map/map.component';
import { UploadFileComponent } from './upload-file/upload-file.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SignUpComponent,
    LoginComponent,
    PaymentsComponent,
    CreatPaymentComponent,
    EditPaymentComponent,
    DialogComponent,
    ErrorsComponent,
    PanelComponent,
    MapComponent,
    UploadFileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    HttpClientModule,

  ],
  // provider => declare services
  providers: [ AuthService , PaymentDataService , AuthGuard ,
    {provide: HTTP_INTERCEPTORS , useClass: TokenInterceptor , multi: true}],
  // initialized component run
  bootstrap: [AppComponent]
})
export class AppModule { }
