import {Address} from '../shared/models/address.model';
export class Config {
    name:string;
    address:Address;
    logo : any;
    getLocalInfo(){
        return `${this.address.city}, ${this.address.street} ${this.address.street_number}`;
    }
    currency:{
        code:string,
        symbol:string
    }

}

export const config :object  = {
    "name":"Example App",
    "logo":"",
    "address":{
        "country":"israel",
        "flag":"https://restcountries.eu/data/isr.svg",
        "city":"Tel Aviv",
        "street":"Ben Yehuda",
        "street_number":"51"

    },
    "currency":{
        "code":"ILS",
        "symbol":"₪"
    }
}