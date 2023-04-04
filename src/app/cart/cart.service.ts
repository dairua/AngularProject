import { Injectable } from '@angular/core';
import { Smartphone } from '../types/Smartphone';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<Smartphone> = [];
  
  constructor() { }

  add(smartphone: Smartphone){
    
    this.cart.push(smartphone);
  }
  get(){
    return this.cart;
  }
  remove(smartphone: Smartphone){
    this.cart = this.cart.filter((sp) => sp != smartphone );
  }
}
