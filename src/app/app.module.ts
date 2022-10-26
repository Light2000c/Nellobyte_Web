import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { AirtimeRechargeComponent } from './pages/offerings/airtime-recharge/airtime-recharge.component';
import { DataBundleComponent } from './pages/offerings/data-bundle/data-bundle.component';
import { ElelctricityBillComponent } from './pages/offerings/elelctricity-bill/elelctricity-bill.component';
import { CableTVRechargeComponent } from './pages/offerings/cable-tv-recharge/cable-tv-recharge.component';
import { FundBettingComponent } from './pages/offerings/fund-betting/fund-betting.component';
import { PrintAirtimeComponent } from './pages/offerings/print-airtime/print-airtime.component';
import { WaecEpinComponent } from './pages/offerings/waec-epin/waec-epin.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FundWalletComponent } from './pages/fund-wallet/fund-wallet.component';
import { TransferMoneyComponent } from './pages/transfer-money/transfer-money.component';
import { PaymentNotificationComponent } from './pages/payment-notification/payment-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    ResetPasswordComponent,
    AirtimeRechargeComponent,
    DataBundleComponent,
    ElelctricityBillComponent,
    CableTVRechargeComponent,
    FundBettingComponent,
    PrintAirtimeComponent,
    WaecEpinComponent,
    FundWalletComponent,
    TransferMoneyComponent,
    PaymentNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
