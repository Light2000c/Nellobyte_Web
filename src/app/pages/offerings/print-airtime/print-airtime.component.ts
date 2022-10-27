import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-airtime',
  templateUrl: './print-airtime.component.html',
  styleUrls: ['./print-airtime.component.css']
})
export class PrintAirtimeComponent implements OnInit {

  title: String = "Print airtime e-pin";
  constructor() { }

  ngOnInit(): void {
  }

}
