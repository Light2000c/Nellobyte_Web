import { Injectable } from '@angular/core';
import { DataProvider } from '../data/data';
import { ENDPOINTS } from '../data/endpoints';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilitiesProvider } from '../utilities/utilities';
import { TransactionResult } from 'src/app/models/transaction.model';
import { USER } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { AuthProvider } from '../auth/auth';

@Injectable({
  providedIn: 'root',
})
export class TransactionProvider {
  public endpoint = ENDPOINTS;
  public databundlesLoaded!: boolean;
  public airtimepackagesLoaded!: boolean;
  public response: any;
  public user!: USER;
  public headers: any;
  public token = "8t01gc14r1nd8r45s9t13rfj8228120225qmp03dhu9q3bj0g4h90584wo121327";
  constructor(
    private data: DataProvider,
    private utilities: UtilitiesProvider,
    private route: Router,
    private auth: AuthProvider,
  ) {
  }

  ngOnInit() {
   
    // this.user = JSON.parse(localStorage.getItem('user_info') || '{}');

    // if (this.user) {
    //   console.log(this.user);
    // } else {
    //   this.route.navigate(['/register']);
    // }
  }

  
  public getAirtimePackages() {
    console.log("Bearer token being used =>>>", this.auth.user.BearerToken);
    this.setHearder();
    this.data.requester(this.endpoint.airtimepackages, {}, this.headers).then(
      (response: any) => {
        console.log('Loaded packages', response);
        this.airtimepackagesLoaded = true;
        this.data.airtimePackages = response;
      },
      (error) => {
        console.log("Couldn't load airtime packages", error);
      }
    );
  }

  public setHearder(){
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.user.BearerToken}`,
      'Content-Type': 'application/json',
    });
  }

  public getDatabundlePackages() {
    console.log("Bearer token being used =>>>", this.auth.user.BearerToken);
    this.data
      .requester(this.endpoint.databundlepackages, {}, this.headers)
      .then(
        (response: any) => {
          console.log('This is data', response);
          this.databundlesLoaded = true;
          this.data.databundles = response;
          let new_data = [];
          // for(let datas of response.MTN.data){
          //   new_data[datas.dataPlan] ={
          //     dataPlan: datas.dataPlan,
          //     value: datas.value,
          //   }
          // }
          // console.log(new_data);
        },
        (error) => {
          console.log("Couldn't load databundle packages", error);
        }
      );
  }



  public async startPayment<T = TransactionResult>(
    endpoint: string,
    params: any
  ) {
    return await this.data.requester<T>(endpoint, params, this.headers);
  }

  public async getTransactions<T = any>(endpoint: string, params: any) {
    return await this.data.requester<T>(endpoint, params, this.headers);
  }

  public async getTransactionHistory(){
    console.log(this.auth.user.BearerToken);
    await this.data.requester2(`http://localhost:3000/${this.auth.user.BearerToken}`).then((res)=>{
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  //  const transaction = await this.data.requester2(`localhost:3000/getTransactions/${this.auth.user.BearerToken}`);

  }

  async pay(params: any, product: any) {
    const transaction = await this.startPayment(product.endpoint, params);
    console.log('Transaction type ->>>', product.name);
    console.log('transaction result ...', transaction);
    if ((transaction as any).status) {
      if (transaction.status.toLowerCase() == 'ok') {
        this.utilities.alert('success', 'Success!', transaction.message);
        return true;
      } else {
        this.utilities.alert('error', 'Error!', transaction.message);
        return true;
      }
    }

    return false;
  }
}
