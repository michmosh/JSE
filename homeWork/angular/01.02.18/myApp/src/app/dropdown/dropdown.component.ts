import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import {countriesService} from '../shared/services/countries.service';
import {CountryBasic} from '../shared/models/CountryBasic.model';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  controlTitle:string = "choose a country";
  dropDownOpen:boolean = false;
  data:any;
  dropdownSimbole = {up :'&#9660' , down: "&#9650" } ;
  selected :any;
  @Output() selectedCountry:EventEmitter<any> = new EventEmitter<any>();

  constructor(private countriesService:countriesService ) { }

  ngOnInit() {
    let cb=(res:Array<any>)=>{
      this.data=res
    };
    // this.countriesService.getAllCountries(cb);
    // this.countriesService.getCountries().subscribe(cb);
    this.countriesService.getCountriesInfo()
    .subscribe((res:CountryBasic[])=>{
      this.data = res;
    })
      
   
  
  }

  selectCountry(country){
    this.selected = country;
    this.controlTitle = country.name;
    this.selectedCountry.emit(country);
    this.dropDownOpen = !this.dropDownOpen;
  }

}
