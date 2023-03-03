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


  public downloadAsPDF() {
    const doc = new jsPDF();
   
    const pdfTable = this.dataToExport.nativeElement;
 
    var html = htmlToPdfmake(pdfTable.innerHTML);
     
    const documentDefinition = { content: html };
    // pdfMake.createPdf(documentDefinition).download(); 
    pdfMake.createPdf(documentDefinition).open(); 
     
  }

}
