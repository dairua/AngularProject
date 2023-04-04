import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Smartphone } from '../types/Smartphone';

@Injectable({
  providedIn: 'root'
})
export class SmartphonesService {

  id: number = 0
  smartphones: Smartphone[]=[];

  constructor(private http: HttpClient) { }

  getSmartphones(){
    return this.http.get('http://localhost:3000/smartphones');
  }

  addSmartphones(smartphones : Smartphone){
    return this.http.post('http://localhost:3000/smartphones',smartphones);
  }

  deleteSmartphone(id : number){
    return this.http.delete('http://localhost:3000/smartphones'+ '/' + id);
  }

  updateSmartphones(smartphones : Smartphone){
    return this.http.put('http://localhost:3000/smartphones' + '/' + smartphones.id ,smartphones); 
  }

  getById(id: number){
    return this.http.get('http://localhost:3000/smartphones'+id);
  }
}
