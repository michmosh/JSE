import {Injectable , EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user/user.model';
import {RegisterUser} from '../models/user/registerUser.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()

export class accountService{
    accountEventEmiter: EventEmitter<User> = new EventEmitter<User>();
    defaultUser = new User('Guest' , "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-48.png");
    islogedIn:boolean = false;
    user:RegisterUser = new RegisterUser();
    constructor(){}
    register(registerUser:RegisterUser):Observable<boolean>{
        Object.assign( this.user ,RegisterUser);
        //  TODO POST NEW USER TO DB 
        this.accountEventEmiter.emit({name:registerUser.firstName})
        this.islogedIn = true;
        return Observable.of(true)
    }

    logout(){
        this.accountEventEmiter.emit(this.defaultUser)
        this.islogedIn = false;
    }
}