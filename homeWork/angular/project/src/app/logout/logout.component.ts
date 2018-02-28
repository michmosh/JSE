import { Component, OnInit } from '@angular/core';
import { accountService } from '../shared/services/account.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private accountService:accountService) { }

  ngOnInit() {
  }

  logout(){
    this.accountService.logout();
  }

}
