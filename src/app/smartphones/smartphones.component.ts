import { Component, OnInit } from '@angular/core';
import { Smartphone } from '../types/Smartphone';
import { SmartphonesService } from './smartphones.service';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent implements OnInit{
  
  smartphones: Smartphone[] = [];
  
  isShowing:boolean=false;
  
  constructor(private smartphonesService: SmartphonesService){ }

    
  ngOnInit(): void {
    this.smartphonesService.getSmartphones().subscribe((res: any) => {
      this.smartphones = res;
    },err => {
      alert(err)
    });
  }

}
