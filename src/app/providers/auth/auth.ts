import { Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { HttpService } from 'src/app/services/http/http.service'
import { ENDPOINTS } from '../data/endpoints';

@Injectable({
  providedIn: "root",
})

export class AuthProvider{

  endpoints = ENDPOINTS;

  constructor(
    private http: HttpClient,
    private httpService: HttpService,
  )
  {
  }

  public getBalance(){
    const body = {
        "mobilenetwork": "1",
        "airtimevalue":"50",
        "mobilenumber":"08136227627",
        "requestid":"00014"
    }
   const promise = new Promise((resolve, reject) => {
    this.httpService.requester(this.endpoints.airtime, body).subscribe((data)=>{
      resolve(data);
    },(error)=>{
      console.log(error);
      reject(error);
    });
   });
  }

}
