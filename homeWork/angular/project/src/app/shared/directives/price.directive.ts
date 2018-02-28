import { Directive, OnInit ,ElementRef , Renderer2 , Input } from '@angular/core';
import {config} from '../../config/config';
@Directive({
  selector: '[app-price]'
})
export class PriceDirective implements OnInit {

  currencyData: Array<any>;
  @Input() amount;
  private config :any = config;
  constructor( private elRef:ElementRef , private renderer: Renderer2) { }

  ngOnInit(){
    this.setPrice();
  }

  setPrice(){
    let text;
    if(this.amount !== null) {
      text = this.renderer.createText(this.amount +' '+ this.config.currency.symbol)
    }else{
      text = this.renderer.createText("100"+ this.config.currency.symbol );
    }
    this.renderer.appendChild(this.elRef.nativeElement,text );    
  }

  setCurrency(){
    
  }
 
}
