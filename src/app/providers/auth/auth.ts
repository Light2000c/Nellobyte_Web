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


}
