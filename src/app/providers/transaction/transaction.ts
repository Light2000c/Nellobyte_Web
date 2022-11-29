import { Injectable } from '@angular/core';
import { DataProvider } from '../data/data';
import { ENDPOINTS } from '../data/endpoints';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilitiesProvider } from '../utilities/utilities';
import { TransactionResult } from 'src/app/models/transaction.model';



@Injectable({
  providedIn: "root",
})


export class TransactionProvider {
  headers = new HttpHeaders({
    'Authorization': 'Bearer o5wwaudr0267118369s7897a7711232022sre8r8s7hk00bfi736m0vqbs114434',
    'Content-Type': 'application/json',
  });

  public endpoint = ENDPOINTS;
  public databundlesLoaded!: boolean;
  public airtimepackagesLoaded!: boolean;
  public response: any;
  constructor(
    private data: DataProvider,
    private utilities: UtilitiesProvider
  ) { }

  public getAirtimePackages() {
    this.data.requester(this.endpoint.airtimepackages, {}, this.headers).then((response: any) => {
      console.log("Loaded packages", response);
      this.airtimepackagesLoaded = true;
      this.data.airtimePackages = response;

    }, (error) => {
      console.log("Couldn't load airtime packages", error);
    });
  }

  public getDatabundlePackages() {
    this.data.requester(this.endpoint.databundlepackages, {}, this.headers).then((response: any) => {
      console.log("This is data", response);
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
    }, (error) => {
      console.log("Couldn't load databundle packages", error);
    });
  }

  public async startPayment<T = TransactionResult>(endpoint: string, params: any) {
    return await this.data.requester<T>(endpoint, params, this.headers);
  }

  public async getTransactions<T = any>(endpoint: string, params: any) {
    return await this.data.requester<T>(endpoint, params, this.headers);
  }

  async pay(params: any, product: any) {
    const transaction = await this.startPayment(product.endpoint, params);
    console.log("Transaction type ->>>", product.name);
    console.log("transaction result ...", transaction);
    if ((transaction as any).status) {
      if (transaction.status.toLowerCase() == 'ok') {
        this.utilities.alert('success', transaction.status, transaction.message);
        return true;
      } else {
        this.utilities.alert('error', transaction.status, transaction.message);
        return true;
      }
    }

    return false;
  }


}
