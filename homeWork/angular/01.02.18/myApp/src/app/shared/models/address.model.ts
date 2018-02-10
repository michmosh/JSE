import { CountryBasic } from "./CountryBasic.model";

export class Address extends CountryBasic {
    public city:string;
    public street:string;
    public street_number:string;
}