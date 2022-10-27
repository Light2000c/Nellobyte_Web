import { Component, OnInit } from '@angular/core';
import { AuthProvider } from 'src/app/providers/auth/auth';

@Component({
  selector: 'app-airtime-recharge',
  templateUrl: './airtime-recharge.component.html',
  styleUrls: ['./airtime-recharge.component.css']
})
export class AirtimeRechargeComponent implements OnInit {

  title: String = "Recharge Airtime";

  constructor(
    private authProvider: AuthProvider,
  ) { }

  ngOnInit(): void {
  //  this.authProvider.getBalance();
  }

}
