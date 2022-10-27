import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elelctricity-bill',
  templateUrl: './elelctricity-bill.component.html',
  styleUrls: ['./elelctricity-bill.component.css']
})
export class ElelctricityBillComponent implements OnInit {

  title: String = "Electricity Bill";
  constructor() { }

  ngOnInit(): void {
  }

}
