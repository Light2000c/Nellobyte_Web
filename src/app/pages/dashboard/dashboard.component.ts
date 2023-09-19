import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthProvider } from 'src/app/providers/auth/auth';
import { DataProvider } from 'src/app/providers/data/data';
import { TransactionProvider } from 'src/app/providers/transaction/transaction';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  routerSubscription: any;
  public transactions!: any;
  


  constructor(
    private transaction: TransactionProvider,
    private data: DataProvider,
    public auth: AuthProvider,
    public route: Router,
    public zone: NgZone
  ) { 
   
  }

  ngOnInit(): void {
    this.auth.setUser();
    // this.transaction.updateWalletBalance(this.header);
    this.loadTransactions();
    
  }


  public async loadTransactions(){
    console.log('Started');
    this.transactions = await this.transaction.getTransactionHistory();
    console.log("transactions loaded on dashboard ===> ", this.transactions)
  }





}

