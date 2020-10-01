import { Injectable } from '@angular/core';
import { Country } from './country';
import { Subject,Observable,of } from 'rxjs'
import * as countrys from "../../../assets/countrys.json";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  country:Country[] = []
updateDetails= new Subject<Country[]>()

  constructor() { }

  getDetails():Observable<any>{
    return  of (( countrys as any).default)
  }
  addDetails(details):Observable<any>{
    
    let data = (countrys as any).default;
    data.push(details);
    return data;
  }
  editDetails(details):Observable<any>{
    console.log(details)
    let data = (countrys as any).default;
    let index = data.findIndex((x)=> x.country ==details.country);
    data = data.splice( index,1,details);
    return data;
  }
  deleteDetails(name):Observable<any>{
    let data = ( countrys as any).default;
    let index = data.findIndex( (x)=> x.country == name);
    data = data.splice(index, 1);
    return data;
  }
}
