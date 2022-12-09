import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthProvider } from 'src/app/providers/auth/auth';
import { DataProvider } from 'src/app/providers/data/data';
import { TransactionProvider } from 'src/app/providers/transaction/transaction';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  header = new HttpHeaders({
    'Authorization': 'Bearer 8t01gc14r1nd8r45s9t13rfj8228120225qmp03dhu9q3bj0g4h90584wo121327',
    'Content-Type': 'application/json',
  });


  constructor(
    private transaction: TransactionProvider,
    private data: DataProvider,
    public auth: AuthProvider,
  ) { }

  ngOnInit(): void {
    this.auth.setUser();
  }



}

