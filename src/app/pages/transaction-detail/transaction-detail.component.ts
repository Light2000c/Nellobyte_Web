import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
// @ts-ignore: Unreachable code error
import pdfMake from 'pdfmake/build/pdfmake';
// @ts-ignore: Unreachable code error
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
// @ts-ignore: Unreachable code error
import htmlToPdfmake from 'html-to-pdfmake';
import { TransactionProvider } from 'src/app/providers/transaction/transaction';
import { TransactionHistory } from 'src/app/models/transaction.model';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})

export class TransactionDetailComponent implements OnInit {


	pdfObj: pdfMake = null;

  public transactionDetails!: TransactionHistory;
  public requestID!: any;

  @ViewChild('dataToExport', {static: false}) dataToExport!: ElementRef;

  constructor(
    private transaction: TransactionProvider,
    private activatedRoute: ActivatedRoute
  ) { 
    
  }

  async ngOnInit(){
  this.activatedRoute.params.subscribe((param) => {
    if(!param){
        return;
    }
    console.log(param);
    this.requestID = param.requestID;
  }); 

   await this.loadTransactionDetails();
  }

  public async loadTransactionDetails(){
    console.log("Loading Details");
    const transactionDetail = await this.transaction.getTransactionDetail(this.requestID);
    this.transactionDetails = transactionDetail;
    console.log(this.transactionDetails);
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
  }

  public checkStatus(status: any) {
    if (status !== '1') {
      return { status: false, title: 'Failed' };
    }

    return { status: true, title: 'Success' };
  }



  public createPDF(){

   let body: any = [
    [{ text: 'Transaction Description:', style: 'tt' }, { text: this.transactionDetails.product_description, style: 'bb' }],
    [{ text: 'Transaction Status:', style: 'tt' }, { text: this.checkStatus(this.transactionDetails.transaction_status).title, style: 'bb' }],
    [{ text: 'Customer ID:', style: 'tt' }, { text: this.transactionDetails.customer_id, style: 'bb' }],
    [{ text: 'Transaction Amount:', style: 'tt' }, { text: '₦' + this.transactionDetails.product_amount, style: 'bb' }],
    [{ text: 'Date Generated:', style: 'tt' }, { text: this.generateCurrentDate(), style: 'bb' }],
   ];

      var docDefinition = {
        content: [
          { text: 'Transaction Receipt', style: 'headers' },
          { text: 'ID: ' + this.transactionDetails.request_id, style: 'id' },
          { text: 'Date: ' + this.formatDate(this.transactionDetails.transaction_date), style: 'date' },
          {
            style: 'tablestyles',
            table: {
              headerRows: 1,
              widths: ['40%', '40%',],
  
              body: body,
            },
  
            layout: {
            }
          }
        ],
  
        styles: {
          tablestyles: {
            margin: [105, 0, 45, 50],
          },
  
          tt: {
            margin: [0, 7, 0, 7],
          },
  
          bb: {
            margin: [0, 7, 0, 7],
            alignment: 'right',
  
          },
  
          headers: {
            margin: [0, 50, 0, 0],
            fontSize: 25,
            alignment: 'center',
            bold: true,
          },
  
  
          id: {
            alignment: 'center',
            bold: true,
          },
  
          date: {
            margin: [0, 0, 0, 20],
            alignment: 'center',
            bold: true,
          }
        }
      };
  
      this.pdfObj = pdfMake.createPdf(docDefinition);
}

public async generateReceipt(){
  await this.createPDF();
  this.pdfObj.open();
}


public formatDate(accepteDate: string){
  const date = new Date(accepteDate);
  const formated_date = date.toLocaleString();
  return formated_date;
}



generateCurrentDate() {
  const date = new Date;
  const formated_date = date.toLocaleString();
  return formated_date;
}

}
