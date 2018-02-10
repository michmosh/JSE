export class User{
    constructor(public name?:string, public avatarUrl?:string){
        this.name = name; 
        this.avatarUrl = avatarUrl;
    }
}