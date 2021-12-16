import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaymentsComponent} from './payments/payments.component';
import {CreatPaymentComponent} from './creat-payment/creat-payment.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {HomeComponent} from './home/home.component';
import {EditPaymentComponent} from './edit-payment/edit-payment.component';
import {PanelComponent} from './panel/panel.component';
import {AuthGuard} from './_Authentication/auth.guard';
import {MapComponent} from './map/map.component';


const routes: Routes = [
  {path : '' ,  component: HomeComponent},
  {path : 'signup' , component: SignUpComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'panel/:id' , component : PanelComponent} ,
  {path : 'ShowPayments' , component : PaymentsComponent} ,
  {path : 'CreatPayment' , component : CreatPaymentComponent  } ,
  {path : 'EditPayments' , component:  EditPaymentComponent } ,
  {path : 'map' , component:  MapComponent } ,
  // {path : 'CreatPayment' , component : CreatPaymentComponent , canActivate: [AuthGuard] } ,
  // {path : 'EditPayments' , component:  EditPaymentComponent , canActivate: [AuthGuard] } ,
  { path: '**', redirectTo: '/' , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
