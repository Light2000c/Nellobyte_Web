import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-notification',
  templateUrl: './payment-notification.component.html',
  styleUrls: ['./payment-notification.component.css']
})
export class PaymentNotificationComponent implements OnInit {

  title: String = "Payment Resolution Center";
  constructor() { }

  ngOnInit(): void {
  }

}
