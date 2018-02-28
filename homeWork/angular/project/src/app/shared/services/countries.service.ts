import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CountryBasic} from '../models/CountryBasic.model';
import 'rxjs/Rx';
@Injectable()
export class countriesService{
    data:any;
    currecies:any
    
    constructor(private http:HttpClient){

    }

    getCountries(){
        if(typeof(this.data) == "undefined"){
            return this.http.get("https://restcountries.eu/rest/v2/all?fields=name;flag;alpha2Code;callingCodes;currencies").map(res=>{
                this.data = res;    
                return res;
            })
        }else{
            return this.data;
        }
        
    }

    getAllCountries(func:(arr:Array<any>)=>void){
        if(typeof(this.data) == "undefined"){
            let myFunc = (arr:Array<any>)=>{
                func(arr);
                this.data = arr;
            }
            return this.http.get("https://restcountries.eu/rest/v2/all?fields=name;flag;alpha2Code;callingCodes;currencies")
            .subscribe(myFunc);
        }else{
            return func(this.data);
        }
    }

    getCountriesInfo():Observable<CountryBasic[]>{
        if(typeof(this.data) == "undefined"){
            return this.http.get<CountryBasic[]>("https://restcountries.eu/rest/v2/all?fields=name;flag;alpha2Code;callingCodes;currencies")
            .map((res)=>{
                this.data = res; 
                return res;
            })
        }else{
            return Observable.of(this.data);
        }
    }

    getCurrencies(){
        if(typeof(this.currecies) == "undefined"){
            return this.http.get<CountryBasic[]>("https://restcountries.eu/rest/v2/all?fields=currencies")
            .map((res)=>{
                this.currecies = res; 
                return res;
            })
        }else{
            return Observable.of(this.currecies);
        } 
    }
}