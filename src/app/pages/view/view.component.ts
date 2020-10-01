import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from './country'
import { CountryService } from './country.service'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  countryDetails = []

  constructor(private country: CountryService, private router: Router) { }
  isOpen = false
  CountryName:string
  get() {
    this.country.getDetails()
    .subscribe((country: Country[]) => {
    console.log(country)
    this.countryDetails = country
   })
  }
  ngOnInit()  {
   this.get()
    
  }
  add() {
    this.router.navigate(['/add'])
  }
  onClose() {
    return this.isOpen = false
  }
  edit(name) {
    this.isOpen = true
    console.log(name)
    return this.CountryName=name
  }
delete(name){
 return this.country.deleteDetails(name)
}
updateDetails(data){
  console.log(data)
  const details ={checked:false,country:this.CountryName,details:data}
  this.country.editDetails(details)
}
}
