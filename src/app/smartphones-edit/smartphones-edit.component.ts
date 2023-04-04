import { Component, OnInit} from '@angular/core';
import { Smartphone } from '../types/Smartphone';
import { SmartphonesService } from '../smartphones/smartphones.service';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-smartphones-edit',
  templateUrl: './smartphones-edit.component.html',
  styleUrls: ['./smartphones-edit.component.css']
})
export class SmartphonesEditComponent implements OnInit{

  smartphones:Smartphone[]=[];
  empForm: FormGroup;
  currentId : number = 0
  
  constructor(private _smp: FormBuilder, private SmartphonesService:SmartphonesService, ){
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
    this.SmartphonesService.getSmartphones().subscribe((res: any) => {
      this.smartphones = res;
    },err => {
      alert(err)
    });
  }

  onUpdateSmartphone(){
    this.SmartphonesService.updateSmartphones(this.empForm.value).subscribe((res:any) => {
      alert('update successed')
    },err => {
      alert(err)
    });
  }

  editSmp() {
    let currentSmp = this.smartphones.find((smp) => {
      return smp.id === this.SmartphonesService.id
    })
    console.log(this.SmartphonesService.id)
    this.empForm.setValue({
      id:currentSmp?.id,
      name: currentSmp?.name,
      owner: currentSmp?.owner,
      linkimg: currentSmp?.linkimg,
      contact: currentSmp?.contact,
      amount: currentSmp?.amount,
    })
  }
  


}
  
