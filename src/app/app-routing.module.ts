import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartphonesComponent } from './smartphones/smartphones.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/auth.guard';

import { SmartphonesListComponent } from './smartphones-list/smartphones-list.component';
import { SmartphonesAddComponent } from './smartphones-add/smartphones-add.component';
import { SmartphonesEditComponent } from './smartphones-edit/smartphones-edit.component';

const router: Routes =[
    {path:'', component: SmartphonesComponent},
    {path:'cart', component: CartComponent, canActivate:[AuthGuard]},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'list', component:SmartphonesListComponent},
    {path:'add', component:SmartphonesAddComponent},
    {path:'edit', component:SmartphonesEditComponent}
]; 
@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule],
})

export class AppRoutingModule{}