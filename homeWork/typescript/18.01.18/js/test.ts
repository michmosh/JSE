export function test(){
    console.log("mos");
}

export function test2(){
    console.log('test2');
}

export class Person{
    name:string; 
    age:number;
    constructor(name:string , age:number){
        this.name = name;
        this.age = age;
    }
}