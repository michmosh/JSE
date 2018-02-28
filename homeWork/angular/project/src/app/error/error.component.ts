import { Component, OnInit ,Input , AfterContentChecked } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements AfterContentChecked {

  constructor() { }
  @Input("control") formControl:FormControl;
  @Input() buttonPresed: boolean;
  errors : string[] = [];

  ngAfterContentChecked(){
    this.setErrorsArray();
  }

  setErrorsArray(){  
    this.errors = [];
    if((this.formControl.dirty && this.formControl.touched) && this.formControl.errors || this.buttonPresed  ){
      for( let i in this.formControl.errors ){
        this.errors.push(this.formControl.errors[i]);
      }
    }
  }

}
