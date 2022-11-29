import { Component, OnInit } from '@angular/core';
import { TransactionResult } from 'src/app/models/transaction.model';
import { DataProvider } from 'src/app/providers/data/data';
import { ENDPOINTS } from 'src/app/providers/data/endpoints';
import { TransactionProvider } from 'src/app/providers/transaction/transaction';

@Component({
  selector: 'app-transactons',
  templateUrl: './transactons.component.html',
  styleUrls: ['./transactons.component.css']
})
export class TransactonsComponent implements OnInit {

  public endpoint = ENDPOINTS;
  public transactions: any;

  constructor(
    private data: DataProvider,
    private transaction: TransactionProvider,
  ) { }

  ngOnInit(): void {
  this.loadTransaction();
  }

 async loadTransaction(){
    console.log("Started");
    // let transaction = await this.transaction.startPayment(this.endpoint.transaction, {requestID: '0052'});
    //  console.log(transaction);
    //  this.transactions = transaction;
    //  console.log(this.transactions);

await this.transaction.getTransactions(this.endpoint.transaction, {requestID: '0052'}).then((response) =>{
     console.log(response);
     this.transactions = response;
     console.log(response.data);
     });
  }



}
