import { Component, OnInit } from '@angular/core';
import { booksService } from '../shared/services/books.service';
import { countriesService } from '../shared/services/countries.service';
import { Book } from '../shared/models/book.model';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  books:Book[];
  currecies:any[];
  constructor( private booksService : booksService , private countriesService:countriesService ) {

   }

  ngOnInit() {
    this.getData();
    
  }

  getData(){
    this.countriesService.getCurrencies().subscribe((res)=>{
      this.currecies = res;
      this.booksService.getLocalBooksData().subscribe((res)=>{
        this.books = res.items;
        this.setbookCurrency();
      })
    })
  }

  setbookCurrency(){
    this.books.filter((book)=>{
      if(typeof book.saleInfo !== "undefined")
        book.saleInfo.listPrice.symbol = this.getBookCurrency( book.saleInfo.listPrice.currencyCode)
    })
  }

  getBookCurrency(code:string):string{
    for (var i = 0 ; i < this.currecies.length ; i++){
      if(code == this.currecies[i].currencies[0].code)
        return this.currecies[i].currencies[0].symbol;
    }
  }

}
