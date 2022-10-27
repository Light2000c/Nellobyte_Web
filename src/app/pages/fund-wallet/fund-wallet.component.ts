import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fund-wallet',
  templateUrl: './fund-wallet.component.html',
  styleUrls: ['./fund-wallet.component.css']
})
export class FundWalletComponent implements OnInit {

  title: String = "Deposit Money";

  constructor() { }

  ngOnInit(): void {
  }

}
