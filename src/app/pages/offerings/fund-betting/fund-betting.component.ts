import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fund-betting',
  templateUrl: './fund-betting.component.html',
  styleUrls: ['./fund-betting.component.css']
})
export class FundBettingComponent implements OnInit {

  title: String = "Fund your betting wallet instantly";
  constructor() { }

  ngOnInit(): void {
  }

}
