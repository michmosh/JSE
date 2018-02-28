import { ValidatorFn ,AbstractControl } from '@angular/forms' ; 
import { FormControl } from '@angular/forms/src/model';

export class ValidConfig {
    private static _counter = 0;

    private static get key(): string {
        return "error_" + ValidConfig._counter++;
    }

    static must(errorMessage = "Field is requierd"):ValidatorFn{
        return (formControl :AbstractControl)=>{
            if(formControl.value === null || formControl.value === "")
                return {must : errorMessage}
            else
                return null
        }
    }

    static minLength(length:number,errorMessage = `Length cant be shrter than ${length} `) : ValidatorFn{
        return (formControl :AbstractControl)=>{
            return formControl.value.length < length ? { minLength:errorMessage} : null;
        }
    }

    static maxLength(length:number , errorMessage = `Length cant be longer than ${length} `):ValidatorFn{
        return (formControl:AbstractControl)=>{
            return formControl.value.length > length ? {maxLength :errorMessage} : null;
        }
    }

    static nonNegative(errorMessage = `Value cant be negative `):ValidatorFn{
        return(formControl:AbstractControl)=>{
            return formControl.value < 0 ? {maxLength : errorMessage} : null;
        }
    }

    static englishOnly():ValidatorFn{
        return (formControl:AbstractControl)=>{
            return {}
        }
    }

    static checkRegex():boolean{
        let valid = false;

        return valid;
    }

    static checkAge(age:number , errorMessage = `Age cant be under ${age} `):ValidatorFn{
        return (formControl: AbstractControl)=>{
            return formControl.value < age ? {age : errorMessage} : null ;
        }
    }
}