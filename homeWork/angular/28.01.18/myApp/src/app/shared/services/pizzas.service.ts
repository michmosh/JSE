import { Injectable } from '@angular/core';

@Injectable()
export class PizzasService {

  constructor() { }

  getOrders():Array<any>{
    let pizzas:Array<any> = [];
    let extras:any = {onion : 5,corn:4,mushrooms:6,peperoni:10,extra_cheese:8, jalapeno:7};
    let sizes : any = {small:25,medium:35,large:45,extra_large:50};
    for(let i = 0 ; i < 100 ; i++){
      let pizza = {id:i , size:this.getRandom(sizes), topping:this.getRandom(extras),price:0};
      pizza.price = sizes[pizza.size] + extras[pizza.topping];
      pizzas.push(pizza);
    }
    return pizzas;
  }

  getRandom(object){
    let keys:Array<string> = Object.keys(object);
    return keys[Math.floor(Math.random() * keys.length)]
  }
}
