import { Component, OnInit } from '@angular/core';
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

  constructor(
    private data: DataProvider,
    private transaction: TransactionProvider
  ) {}

  async ngOnInit() {
    // this.convertTarget();
    this.loader = true;
    await this.loadTransaction();
    setTimeout(() => {
      this.loader = false;
    }, 3000);
   

    // this.user = JSON.parse(localStorage.getItem('user_info') || '{}');
    // console.log('This is the new user => ', this.user);
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

  public convertDate(dates: String) {
    const dateTime = '2023-01-21T17:10:05.450Z';
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
    // Convert the datetime string to a Date object
    const date = new Date(datetime);

    // Get the timestamp of the datetime in milliseconds
    const timestamp = date.getTime();

    // Calculate the timestamp of 7 days ago in milliseconds
    const sevenDaysAgoTimestamp = timestamp - day * 24 * 60 * 60 * 1000;

    // Create a new Date object for the 7 days ago timestamp
    const sevenDaysAgoDate = new Date(sevenDaysAgoTimestamp);

    // Format the new Date object as a string in the same format as the original datetime string
    // const sevenDaysAgoString = sevenDaysAgoDate.toISOString().replace(/[-:]/g, '').slice(0, -5);
    const sevenDaysAgoString = sevenDaysAgoDate.toISOString();

    // Return the 7 days ago datetime string
    return sevenDaysAgoString;
  }

  async sortTransactions() {
    console.log('Number is =>> ', this.sort);

    const now = new Date();
    const datetime = now.toISOString();
    console.log(datetime); // Output: '2023-02-15T12:00:00.000Z'

    // const datetime = '20130623T13:22-0500';
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

  public convertTarget(collected: any){
  // const datetimeString = "2023-02-20T10:47:48.660Z";
   const datetimeString = collected;
const date = new Date(datetimeString);
const dateString = date.toLocaleDateString("en-US", {
  weekday: "short",
  day: "numeric",
  month: "long",
});
const formattedString = dateString
  .toLowerCase()
  .replace(/\s/g, "_")
  .replace(/[^a-z_]/g, "");

  console.log();
console.log(" checked",formattedString);

return formattedString;
}

}
