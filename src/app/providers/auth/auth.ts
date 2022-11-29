import { Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { HttpService } from 'src/app/services/http/http.service'
import { ENDPOINTS } from '../data/endpoints';
import { USER } from 'src/app/models/user.model';
import { DataProvider } from '../data/data';
import { TransactionProvider } from '../transaction/transaction';

@Injectable({
  providedIn: "root",
})

export class AuthProvider{

  endpoints = ENDPOINTS;
  public user!: USER;
  

  constructor(
    private http: HttpClient,
    private httpService: HttpService,
    private data: DataProvider,
    private transaction: TransactionProvider,
  )
  {
  }


}
