import { Component, OnInit } from '@angular/core';
import {Book} from '../shared/models/book.model';
import { ActivatedRoute } from '@angular/router';
import { booksService} from '../shared/services/books.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  book:Book;
  constructor(private route: ActivatedRoute,private service:booksService) { }

  ngOnInit() {
    this.setBook();
  }

  setBook(){
    // this.route.params.subscribe(param=>{
    //   this.id = param.id;
    //   this.service.getBookById(this.id).subscribe((res)=>{
    //     this.book = res;
    //   })
    // })
    this.route.params.subscribe(param=>
      this.service.getBookById(param.id).subscribe((res)=>{
        this.book = res;
      })
    )
    
  }

}
