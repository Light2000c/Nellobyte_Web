import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpService } from 'src/app/services/http/http.service';


@Injectable({
  providedIn: "root",
})

export class DataProvider {

    header = new HttpHeaders({
    'Authorization': 'Bearer o5wwaudr0267118369s7897a7711232022sre8r8s7hk00bfi736m0vqbs114434',
    'Content-Type' : 'application/json',
  });

 public baseUrl: string = "https://www.nellobytesystems.com/enterprise/"
 public databundles!: any;
 public airtimePackages!: any;


  constructor(
    private http: HttpClient,
    private httpService: HttpService,
  ) {

  }

  public requester<T = any>(url: any, body: any, header: any) {
    const response =  new Promise<T>((resolve, reject) => {
      this.httpService.post(this.baseUrl+url, body, header).subscribe((data: any) => {
        // console.log(data);
        resolve(data);
      }, (error) => {
        // console.log(error);
        reject(error);
      });
    });
    return response;
  }

  public requester2<T = any>(url: any) {
    const response =  new Promise<T>((resolve, reject) => {
      this.httpService.get(url).subscribe((data: any) => {
        // console.log(data);
        resolve(data);
      }, (error) => {
        // console.log(error);
        reject(error);
      });
    });
    return response;
  }





}
