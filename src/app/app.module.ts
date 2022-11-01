import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { SideItemsComponent } from './components/side-items/side-items.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { WithdrawCommissionComponent } from './pages/withdraw-commission/withdraw-commission.component';
import { HomeComponent } from './pages/home/home.component';

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
    PaymentNotificationComponent,
    SubHeaderComponent,
    SubmitButtonComponent,
    SideItemsComponent,
    ContactUsComponent,
    WithdrawCommissionComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
