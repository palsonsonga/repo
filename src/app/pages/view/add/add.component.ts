import { Component, OnInit,ViewChild } from '@angular/core';
import{Router} from '@angular/router'
import{NgForm} from '@angular/forms'
import{Country} from '../country'
import {CountryService} from '../country.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
   @ViewChild('myForm') myForm:NgForm
  country :Country ={checked:false,country:'',details:''}
  constructor(private router:Router, private countryService:CountryService) { }

  ngOnInit() {
  }
  addDetails(){
   const details = {checked:false,country:this.myForm.value.countryName,details:this.myForm.value.countryDetails}
this.countryService.addDetails(details)
 this.myForm.reset()
  }
close(){
  this.router.navigate(['/view'])
}
}
