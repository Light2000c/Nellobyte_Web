import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-items',
  templateUrl: './side-items.component.html',
  styleUrls: ['./side-items.component.css']
})
export class SideItemsComponent implements OnInit {

  public quickLinks = [
    { name: 'Airtime Recharge', icon: 'fa-mobile', link: ''},
    { name: 'Buy Databundle', icon: 'fa-globe', link: ''},
    { name: 'Electrical Bill', icon: 'fa-bolt', link: ''},
    { name: 'CableTv Recharge', icon: 'fa-tv', link: ''},
    { name: 'Card Printing', icon: 'fa-print', link: ''},
    { name: 'Fund Betting', icon: 'fa-wallet', link: ''},
    { name: 'Waec Epin', icon: 'fa-sticky-note', link: ''},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
