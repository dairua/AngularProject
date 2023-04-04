import { Component, OnInit } from '@angular/core';
import { Smartphone } from '../types/Smartphone';
import { SmartphonesService } from '../smartphones/smartphones.service';
import { FormBuilder, FormGroup} from '@angular/forms'


@Component({
  selector: 'app-smartphones-add',
  templateUrl: './smartphones-add.component.html',
  styleUrls: ['./smartphones-add.component.css']
})
export class SmartphonesAddComponent implements OnInit{

  smartphones:Smartphone[]=[];
  empForm: FormGroup
  
  constructor(private _smp: FormBuilder, private SmartphonesService:SmartphonesService, ){
    this.empForm = this._smp.group({
      id: 0,
      name: '',
      owner: '',
      linkimg: '',
      contact: 0,
      amount: 0,
    })
  }

  ngOnInit(): void {

  }

  onAddSmartphone(): void{
    this.SmartphonesService.addSmartphones(this.empForm.value).subscribe((res:any) => {
      this.smartphones = res;
      alert('add successed')
    },err => {
      alert(err)
    });
  }
}
