import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getStoreData(key: string){
    return localStorage.getItem(key);
  }
}
