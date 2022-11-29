import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // header = new HttpHeaders({
  //   'Authorization': 'Bearer d24m6z0v5f06e0ogq97vc2k97710222022m08981pt6cr64v787l7tmav8m40936',
  //   'Content-Type' : 'application/json',
  // });

  constructor(
    private http: HttpClient,
  ) { }

  public post(url: any,body: any, header: any){
    return this.http.post(url, body, {headers: header});
  }

}
