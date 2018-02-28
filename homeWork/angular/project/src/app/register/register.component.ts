import { Component, OnInit, TemplateRef , EventEmitter } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { RegisterUser } from '../shared/models/user/registerUser.model';
import {FormBuilder , FormGroup } from '@angular/forms'
import { ValidConfig} from '../shared/models/validators/validation.model';
import {accountService} from  '../shared/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  modalRef: BsModalRef;
  newUser : RegisterUser = new RegisterUser();
  countries : any;
  registerForm: FormGroup;
  countrySelected:boolean = false;
  constructor(  private modalService: BsModalService ,
                private formBuilder : FormBuilder ,
                private accountService:accountService) { }

  ngOnInit() {
   this.buildForm();
  }

  buildForm(){
    this.registerForm = this.formBuilder.group({
      email:['',[ValidConfig.must(),ValidConfig.minLength(5),ValidConfig.maxLength(15)]],
      firstName :['',[ValidConfig.must(),ValidConfig.maxLength(15),ValidConfig.minLength(5)]],
      lastName :['',[ValidConfig.must(),ValidConfig.maxLength(15),ValidConfig.minLength(5)]],
      password:['',[ValidConfig.must(),ValidConfig.minLength(3),ValidConfig.maxLength(8)] ],
      age:['' ,[ValidConfig.must(),ValidConfig.checkAge(5)] ], 
      country : ['' , ValidConfig.must()] 
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  closeModal(){
    this.modalRef.hide();
  }
  register(){
    if(this.validate()){
      debugger;
      this.setUser();
      this.accountService.register(this.newUser)
      this.modalRef.hide();
    }
   
  }
  selectCountry(country){
    this.newUser.country = country;
    this.registerForm.get('country').setValue(this.newUser.country);
  }

  validate(){
    //TODO VALIDATION CHECK
    //TODO ALL NECESARY VALIDATIONS : EMAIL , AGE NUMERIC ONLY  , 
    return this.registerForm.status === "VALID" ? true : false;
  }

  setUser(){
    this.newUser.firstName = this.registerForm.value.firstName;
    this.newUser.lastName = this.registerForm.value.lastName;
    this.newUser.age = this.registerForm.value.age;
    this.newUser.email = this.registerForm.value.email;
  }

}
