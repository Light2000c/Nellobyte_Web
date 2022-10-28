import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { promises } from 'dns';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  header = new Headers({
    'Authorization': 'Bearer d24m6z0v5f06e0ogq97vc2k97710222022m08981pt6cr64v787l7tmav8m40936',
    'Content-Type' : 'application/json',
  });
  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.check();
  }

  check(){
   const promise = new Promise((resolve, reject) => {
   this.http.post("https://www.nellobytesystems.com/enterprise/APIGetWalletBalanceV1.asp",{headers: this.header}).subscribe((res)=>{
      resolve(res);
      console.log(res);
    }, (error) => {
      console.log(error);
      reject(error);
    });
   });

   return promise;
  }


}
