import { Component, OnInit , Input, Output , EventEmitter } from '@angular/core';
import {User} from '../shared/models/user/user.model';
import {accountService} from '../shared/services/account.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string;
  user:User = new User('guest',"https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-48.png");
  @Input() config;
  @Output() onLoginOrRegister:EventEmitter<string> = new EventEmitter<string>();
  isLogedIn:boolean = false;

  constructor(private accountService:accountService) { }

  ngOnInit() {
    this.setConfigData();
    this.checkUserStatus();
  
  }

  checkUserStatus(){
    this.accountService.accountEventEmiter.subscribe((user)=>{
      this.user.name = user.name;
      this.isLogedIn = user.name == "Guest" ? false : true;
    })
  }

  setConfigData(){
    this.title = this.config.name;
  }

  login(){
    this.onLoginOrRegister.emit("login");
  }
  register(){
    this.onLoginOrRegister.emit("register");
  }

}
