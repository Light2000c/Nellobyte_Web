import { Injectable} from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpService } from 'src/app/services/http/http.service'
import { ENDPOINTS } from '../data/endpoints';
import { USER } from 'src/app/models/user.model';
import { DataProvider } from '../data/data';
import { TransactionProvider } from '../transaction/transaction';
import { TransactionResult } from 'src/app/models/transaction.model';
import { Router } from '@angular/router';


export interface SignUp{
  CompanyName: string,
  FirstName: string,
  LastName: string,
  PhoneNo: string,
  Email: string,
  password: string,
} 

export interface SignIn{
  PhoneNo: string,
  password: string,
} 

@Injectable({
  providedIn: "root",
})


export class AuthProvider{

  headers = new HttpHeaders({
    // 'Authorization': 'Bearer o5wwaudr0267118369s7897a7711232022sre8r8s7hk00bfi736m0vqbs114434',
    'Content-Type': 'application/json',
  });

  endpoints = ENDPOINTS;
  public user!: USER;
  

  constructor(
    private http: HttpClient,
    private httpService: HttpService,
    private data: DataProvider,
    private transaction: TransactionProvider,
    public route: Router,
  )
  {
  }


  public async signIn(url: string, params: SignIn){
    try{
    const response = await this.data.requester(url, params, this.headers);
    if(response.status === 'ok'){
     this.user = response.data;
     this.storeUserData('user_info', JSON.stringify(this.user));
      this.route.navigate(['/dashboard']);
    }
   if(response.status === 'error'){
      return {message: response.message}
    }else{
      return {message: "Something went wrong, Please try again later"};
    }
  }catch(err){
      return {message: "Something went wrong, Please try again later"};
    }
    // console.log(response);
    return;
  }


  public async signUp(url: string, params: SignUp){
    try{
    const response = await this.data.requester(url, params, this.headers);
     if(response.status === 'ok'){
      this.user = response.data;
      this.storeUserData('user_info', JSON.stringify(this.user));
       this.route.navigate(['/dashboard']);
     }
    if(response.status === 'error'){
       return {message: response.message}
     }
    }catch(err){
      return {message: "Something went wrong, Please try again later"};
    }
    //  console.log(response);
     return;
    
  }


  public setUser(){
    this.user = JSON.parse(localStorage.getItem('user_info') || '{}');
    console.log(this.user);
  }

  public checkUser(){
    let user = JSON.parse(localStorage.getItem('user_info') || '{}');
    if (user !== null) {
      console.log("saved data still exist ->>> ");
      this.setUser();
    }

  }


  public storeUserData(key: string, value: string){
     localStorage.setItem(key,value);
  }


}
