import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Smartphone } from '../../types/Smartphone';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.css']
})
export class SmartphoneComponent implements OnInit{
  
  @Input() smartphone: Smartphone ={} as Smartphone;

  

  constructor(private cartService: CartService){}

  ngOnInit(): void {
  }
 
  isInCart: boolean = false;
  addToCart(){
    this.isInCart=true;
    this.cartService.add(this.smartphone);
  }
  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.smartphone);
  }
}
