import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-items',
  templateUrl: './side-items.component.html',
  styleUrls: ['./side-items.component.css']
})
export class SideItemsComponent implements OnInit {

  public quickLinks = [
    { name: 'Airtime Recharge', icon: 'fa-mobile', link: 'BuyAirtime'},
    { name: 'Buy Databundle', icon: 'fa-globe', link: 'BuyDatabundle'},
    { name: 'Electrical Bill', icon: 'fa-bolt', link: 'BuyElectricity'},
    { name: 'CableTv Recharge', icon: 'fa-tv', link: 'BuyCableTV'},
    { name: 'Card Printing', icon: 'fa-print', link: 'EpinGenerator'},
    { name: 'Fund Betting', icon: 'fa-wallet', link: 'BuyBetting'},
    { name: 'Waec Epin', icon: 'fa-sticky-note', link: 'BuyWAEC'},
  ]

  constructor(
    public route: Router
  ) { }

  ngOnInit(): void {
  }


  public navigatePage(url: any){
    this.route.navigate([url])
  }

}
