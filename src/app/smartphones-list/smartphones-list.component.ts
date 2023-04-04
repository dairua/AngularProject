import { Component, OnInit } from '@angular/core';
import { SmartphonesService } from '../smartphones/smartphones.service';
import { Smartphone } from '../types/Smartphone';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-smartphones-list',
  templateUrl: './smartphones-list.component.html',
  styleUrls: ['./smartphones-list.component.css']
})
export class SmartphonesListComponent implements OnInit{


  smartphones: Smartphone[]=[];
  empForm: FormGroup;
  
  constructor(private smartphonesService:SmartphonesService, private router: Router, private _smp: FormBuilder){
    this.empForm = this._smp.group({
      id:0,
      name: '',
      owner: '',
      linkimg: '',
      contact: 0,
      amount: 0,
    })
  }

  ngOnInit(): void {
    this.smartphonesService.getSmartphones().subscribe((res: any) => {
      this.smartphones = res;
    },err => {
      alert(err)
    });
  }

  onDeletesmartphone(id : number){
      this.smartphonesService.deleteSmartphone(id).subscribe((res:any)=>{
      this.smartphones = res;
      this.upDatedata(id);
      alert('delete successed')
    },err => {
      alert(err)
    });
  }

  upDatedata(id: number){
    for(var i=0; i< this.smartphones.length; i++){
      if(this.smartphones[i].id==id){
        this.smartphones.splice(i,1);
        break;
      }
    }
  }

  editer(id: number) {
    let currentSmp = this.smartphones.find((smp) => {
      return smp.id === id
    })
    console.log(this.smartphonesService.id)
    this.empForm.setValue({
      id:currentSmp?.id,
      name: currentSmp?.name,
      owner: currentSmp?.owner,
      linkimg: currentSmp?.linkimg,
      contact: currentSmp?.contact,
      amount: currentSmp?.amount,
    })
  }

  onUpdateSmartphone(){
    this.smartphonesService.updateSmartphones(this.empForm.value).subscribe((res:any) => {
      alert('update successed')
    },err => {
      alert(err)
    });
  }

  editSmp() {
    
  }

}
