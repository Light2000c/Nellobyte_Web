import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
token = '8t01gc14r1nd8r45s9t13rfj8228120225qmp03dhu9q3bj0g4h90584wo121327'

header = new HttpHeaders({
  'Authorization': `Bearer${this.token}`,
  'content-type': 'application/json',

});

  constructor(
    private http: HttpClient,
  ) { }

  public requester(api: any, parameters: any){
   return this.http.post(api,parameters, {headers: this.header, responseType: 'text'});
  }
}
