import { Directive, OnInit ,ElementRef , Renderer2 , Input } from '@angular/core';
import {config} from '../../config/config';

@Directive({
  selector: '[app-currency]'
})
export class CurrencyDirective {
  @Input() symbol;
  private config :any = config;
  constructor( private elRef:ElementRef , private renderer: Renderer2) { }

  ngOnInit(){
    this.setPrice();
  }

  setPrice(){
    let text;
    if(this.symbol !== null) {
      text = this.renderer.createText( this.symbol)
    }else{
      text = this.renderer.createText(this.config.currency.symbol );
    }
    this.renderer.appendChild(this.elRef.nativeElement,text );    
  }
}
