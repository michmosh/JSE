import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LoginUser } from '../shared/models/user/loginUser.model';
import { FormBuilder , FormGroup, FormArray } from '@angular/forms';
import { ValidConfig } from '../shared/models/validators/validation.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  modalRef: BsModalRef;
  loginUser:LoginUser;
  loginForm:FormGroup;
  
  constructor(private modalService: BsModalService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.loginForm = this.formBuilder.group({
      userName : ['',[ValidConfig.must(),ValidConfig.minLength(5),ValidConfig.maxLength(15)]] ,
      password: ['',[ValidConfig.must(),ValidConfig.minLength(3),ValidConfig.maxLength(8)]] 
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  closeModal(){
    this.modalRef.hide();
  }
  verifyUser(){
    debugger;
    this.modalRef.hide();
   
  }

}
