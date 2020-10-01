import { Component, OnInit,Input,ViewChild,Output,EventEmitter } from '@angular/core';
import{CountryService} from '../country.service'
import {NgForm} from'@angular/forms'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild('myForm') myForm:NgForm
  @Input('name') countryName:string
  @Output('details') countryDetails=new EventEmitter() 
edited= true
country ={checked:false, country:'', details:''}
  constructor(private countryService:CountryService) { }

  ngOnInit() {
  }
editDetails(){
 this.countryDetails.emit(this.myForm.value.countryDetails)
 this.edited =false
}
}