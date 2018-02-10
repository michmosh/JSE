import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { RegisterUser } from '../shared/models/registerUser.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  modalRef: BsModalRef;
  newUser : RegisterUser = new RegisterUser();
  countries : any;
  
  constructor( private modalService: BsModalService ) { }

  ngOnInit() {
   
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  closeModal(){
    this.modalRef.hide();
  }
  register(){
    this.modalRef.hide();
  }
  selectCountry(country){
    this.newUser.country = country;
  }

}
