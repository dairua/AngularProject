import { Injectable } from '@angular/core';
import { LoginForm, RegisterForm } from '../types/Auth';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean=false;

  isLoading: boolean = false;

  pasawordMatched: boolean=true; 

  constructor(private router: Router) { }

  login(form:LoginForm){
    if(this.isLoading) return;
    this.isLoading=true;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, form.email, form.password)
  .then((userCredential) => {
    this.isAuthenticated=true;
    this.router.navigate(['']);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    this.isAuthenticated=false;
  }).finally(() => (this.isLoading=false));
  }
  
  register(form:RegisterForm){
    if(this.isLoading) return;
    this.isLoading=true;
    if(form.password != form.confirmpassword){
      this.pasawordMatched=false;
      return;
    }

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, form.email, form.password)
  .then((userCredential) => {
    this.isAuthenticated=true;
  })
  .catch((error) => {
    this.isAuthenticated=false;
    const errorCode = error.code;
    const errorMessage = error.message;
  }).finally(() => (this.isLoading=false));

    // console.log(this.form);
  }

  logout(){
    const auth = getAuth();
    signOut(auth)
      .then(()=>{
        this.router.navigate(['login']);
        this.isAuthenticated=false;
      })
      .catch((error)=>{

      });
      
  }
}
