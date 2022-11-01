import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdraw-commission',
  templateUrl: './withdraw-commission.component.html',
  styleUrls: ['./withdraw-commission.component.css']
})
export class WithdrawCommissionComponent implements OnInit {

  public title: String = "Transfer Commission To Wallet";
  
  constructor() { }

  ngOnInit(): void {
  }

}
