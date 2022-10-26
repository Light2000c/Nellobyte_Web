import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FundWalletComponent } from './pages/fund-wallet/fund-wallet.component';
import { AirtimeRechargeComponent } from './pages/offerings/airtime-recharge/airtime-recharge.component';
import { CableTVRechargeComponent } from './pages/offerings/cable-tv-recharge/cable-tv-recharge.component';
import { DataBundleComponent } from './pages/offerings/data-bundle/data-bundle.component';
import { ElelctricityBillComponent } from './pages/offerings/elelctricity-bill/elelctricity-bill.component';
import { FundBettingComponent } from './pages/offerings/fund-betting/fund-betting.component';
import { PrintAirtimeComponent } from './pages/offerings/print-airtime/print-airtime.component';
import { WaecEpinComponent } from './pages/offerings/waec-epin/waec-epin.component';
import { PaymentNotificationComponent } from './pages/payment-notification/payment-notification.component';
import { TransferMoneyComponent } from './pages/transfer-money/transfer-money.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'ResetPassword',
    component: ResetPasswordComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'BuyAirtime',
    component: AirtimeRechargeComponent,
  },
  {
    path: 'BuyDatabundle',
    component: DataBundleComponent,
  },
  {
    path: 'BuyElectricity',
    component: ElelctricityBillComponent,
  },
  {
    path: 'BuyCableTV',
    component: CableTVRechargeComponent,
  },
    {
    path: 'BuyBetting',
    component: FundBettingComponent,
  },
  {
    path: 'EpinGenerator',
    component: PrintAirtimeComponent,
  },
   {
    path: 'BuyWAEC',
    component: WaecEpinComponent,
  },
  {
    path: 'Deposit',
    component: FundWalletComponent,
  },
  {
    path: 'TransferMoney',
    component: TransferMoneyComponent,
  },
  {
    path: 'PaymentNotification',
    component: PaymentNotificationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
