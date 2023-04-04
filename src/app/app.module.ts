import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SmartphonesComponent } from './smartphones/smartphones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SmartphoneComponent } from './smartphones/smartphone/smartphone.component';
import { SmartphonesService } from './smartphones/smartphones.service';
import { SmartphonesModule } from './smartphones/smartphones.module';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

import { SmartphonesListComponent } from './smartphones-list/smartphones-list.component';
import { SmartphonesAddComponent } from './smartphones-add/smartphones-add.component';
import { SmartphonesEditComponent } from './smartphones-edit/smartphones-edit.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    declarations: [AppComponent, CartComponent,  SmartphonesListComponent, SmartphonesAddComponent, SmartphonesEditComponent],
    imports:[BrowserModule, SmartphonesModule,AppRoutingModule,AuthModule,FormsModule,HttpClientModule, ReactiveFormsModule],
    // providers:[SmartphonesService],
    bootstrap: [AppComponent], 
})
export class AppModule{}