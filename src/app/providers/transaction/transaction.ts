import { Injectable } from '@angular/core';
import { DataProvider } from '../data/data';
import { ENDPOINTS } from '../data/endpoints';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilitiesProvider } from '../utilities/utilities';
import { TransactionHistory, TransactionResult } from 'src/app/models/transaction.model';
import { USER } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { AuthProvider } from '../auth/auth';
import { rejects } from 'assert';

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
  public endpoints = ENDPOINTS;
  constructor(
    private data: DataProvider,
    private utilities: UtilitiesProvider,
    private route: Router,
    private auth: AuthProvider,
  ) {
    this.user = JSON.parse(localStorage.getItem('user_info') || '{}');
    console.log('This is the new user => ', this.user);
    console.log('This is the new user => ', this.user.BearerToken);
  }

  ngOnInit(): void {
   
    // this.user = JSON.parse(localStorage.getItem('user_info') || '{}');

    // if (this.user) {
    //   console.log(this.user);
    // } else {
    //   this.route.navigate(['/register']);
    // }
    // this.auth.setUser();
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
    console.log("Bearer token being used =>>>", this.auth.user.BearerToken);
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.user.BearerToken}`,
      'Content-Type': 'application/json',
    });
  }

  public getDatabundlePackages() {
    console.log("Bearer token being used =>>>", this.auth.user.BearerToken);
    this.setHearder();
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

  public async getTransactionHistory2(){
    console.log("Bearer token is "+ this.user.BearerToken);
    await this.data.requester2(`http://localhost:3000/getTransactions/${this.user.emailAddress}`).then((res)=>{
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
    // await this.data.requester2(`http://localhost:3000/getTransactions/2a7be0cf2216e26b8fccda077cead402fc277b8c3f95c4ffae1eab6214a658363161de4839b1c5f53de71102ddf826c21a96b38ba401fbb1a634609695748198`).then((res)=>{
    //   console.log(res);
    // }).catch((err) => {
    //   console.log(err);
    // });
  //  const transaction = await this.data.requester2(`localhost:3000/getTransactions/${this.auth.user.BearerToken}`);

  }

  public async getTransactionHistory<T = TransactionHistory>(){
    console.log("Bearer token is "+ this.user.BearerToken);
    const response = new Promise<T>((resolve, reject) => {
      this.data.requester2(`http://localhost:3000/getTransactions/${this.user.emailAddress}`).then((res)=>{
      console.log(res);  
      resolve(res);
      }).catch((err) => {
        reject(err);
      });
    });

    return response;
  
  }


  public storeUserData(key: string, value: string){
    localStorage.setItem(key,value);
 }
 
  public async updateWalletBalance(){
    console.log("Bearer token being used =>>>", this.user.BearerToken);
    this.setHearder();
    const response = await this.data.requester(this.endpoints.myaccount, {}, this.headers);
    if(response.status === 'ok'){
      let data = response.data;
      this.user.walletAmount = data.walletAmount;
      this.storeUserData('user_info', JSON.stringify(this.user));
      console.log("user =>>>",this.user);
      console.log(response);
     }
  
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
