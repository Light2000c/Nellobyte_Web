import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
// @ts-ignore: Unreachable code error
import pdfMake from 'pdfmake/build/pdfmake';
// @ts-ignore: Unreachable code error
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
// @ts-ignore: Unreachable code error
import htmlToPdfmake from 'html-to-pdfmake';
import { style } from '@angular/animations';
import { reduce } from 'rxjs';



@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})

export class TransactionDetailComponent implements OnInit {

  @ViewChild('dataToExport', {static: false}) dataToExport!: ElementRef;

  constructor() { 
    
  }

  ngOnInit(): void {
  
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
