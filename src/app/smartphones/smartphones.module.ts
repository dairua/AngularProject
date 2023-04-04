import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartphonesService } from './smartphones.service';
import { SmartphonesComponent } from './smartphones.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';



@NgModule({
  declarations: [SmartphonesComponent,SmartphoneComponent],
  providers:[SmartphonesService],
  imports: [CommonModule],
  exports:[SmartphonesComponent],
})
export class SmartphonesModule { }
