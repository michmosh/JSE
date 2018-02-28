import { Component, OnInit } from '@angular/core';
import {Config,config} from './config/config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appData:Object;
  title:string ="";
  config:Config = new Config();
  
  ngOnInit(){
    this.getConfig();
    this.setAppConfigData();
  }
 
  onRegisterLogin(event):void{
    this.title = event;
  }

  getConfig(){
    Object.assign(this.config ,config);
  }
  
  setAppConfigData(){
    this.appData = this.config;
  }
  
}
