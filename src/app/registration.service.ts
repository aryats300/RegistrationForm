import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }

  getData(key: string) {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  setData(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  
}
