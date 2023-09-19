import { Component, OnInit } from '@angular/core';
import { ChildActivationStart, Router,  } from '@angular/router';
import {
  TransactionHistory,
  TransactionResult,
} from 'src/app/models/transaction.model';
import { USER } from 'src/app/models/user.model';
import { DataProvider } from 'src/app/providers/data/data';
import { ENDPOINTS } from 'src/app/providers/data/endpoints';
import { TransactionProvider } from 'src/app/providers/transaction/transaction';

@Component({
  selector: 'app-transactons',
  templateUrl: './transactons.component.html',
  styleUrls: ['./transactons.component.css'],
})
export class TransactonsComponent implements OnInit {
  public endpoint = ENDPOINTS;
  public transactions!: any;
  public sortedTransactions: any = [];
  public user!: USER;
  public loader: boolean = false;
  public sort: any = 0;
  public count: Number = 0;
  public from: any = "";
  public to: any = "";
  public page: any = 1;
  public counter: any = 0;
  public pageSize: any = 10;



  constructor(
    private data: DataProvider,
    private transaction: TransactionProvider,
    private route: Router
  ) { }

  ngOnInit() {
    // this.convertTarget();
    this.loader = true;
    this.loadTransaction();
    setTimeout(() => {
      this.loader = false;
    }, 3000);

  }

  async loadTransaction() {
    console.log('Started');
    this.transactions = await this.transaction.getTransactionHistory();
    console.log('I got the Transactions ==>', this.transactions);
  }

  public checkStatus(status: any) {
    if (status !== '1') {
      return { status: false, title: 'Failed' };
    }

    return { status: true, title: 'Success' };
  }



  public convertDate(dates: any) {
    const dateTime = dates;
    const date = new Date(dateTime);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const humanReadableDateTime = date.toLocaleString('en-US', options);

    console.log(humanReadableDateTime);
    return humanReadableDateTime;
    // Output: Saturday, January 21, 2023 5:10:05 PM
  }

  public getPastDays(datetime: string, day: any): string {
    const date = new Date(datetime);
    const timestamp = date.getTime();
    const sevenDaysAgoTimestamp = timestamp - day * 24 * 60 * 60 * 1000;
    const sevenDaysAgoDate = new Date(sevenDaysAgoTimestamp);
    const sevenDaysAgoString = sevenDaysAgoDate.toISOString();
    return sevenDaysAgoString;
  }

  async sortTransactions() {
    console.log('Number is =>> ', this.sort);
    const now = new Date();
    const datetime = now.toISOString();
    console.log(datetime); // Output: '2023-02-15T12:00:00.000Z'
    const DaysAgoDatetime = this.getPastDays(datetime, this.sort);
    console.log(DaysAgoDatetime); // Output: '20130616T13:22-0500'
    this.transactions.forEach(async (element: any) => {
      if (element.transaction_date >= DaysAgoDatetime) {
        await this.sortedTransactions.push(element);
      }

      this.loader = true;
      this.transactions = this.sortedTransactions;
      setTimeout(() => {
        this.loader = false;
      }, 3000);
    });
  }


  public formatDate() {
    this.loader = false;
    this.sortedTransactions = [];
    const convertFrom = new Date(this.from);
    const convertTo = new Date(this.to);

    this.transactions.forEach(async (element: any) => {
      if (this.from != "" && this.to != "") {
        const from = convertFrom.toISOString();
        const to = convertTo.toISOString();
        if (element.transaction_date > from && element.transaction_date < to) {
          await this.sortedTransactions.push(element);
        }
      }

      if (this.from != "" && this.to == "") {
        const from  = convertFrom.toISOString();
        if (element.transaction_date >= from) {
          await this.sortedTransactions.push(element);
        }
      }

      if (this.from == "" && this.to != "") {
        const to = convertTo.toISOString();
        if (element.transaction_date <= to) {
          await this.sortedTransactions.push(element);
        }
      }

      this.loader = true;
      this.transactions = this.sortedTransactions;
      setTimeout(() => {
        this.loader = false;
      }, 3000);
    });

  }

  public viewDetails(requestID: any){
   this.route.navigate(['/Transaction', requestID]);
  }

  public onPageChange(event: any){
    this.page = event;
  }

}
