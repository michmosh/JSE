import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {bookData} from '../data/books-data';
import { RootBookObject , Book } from './../models/book.model';
import {Observable} from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
import 'rxjs/Rx';
@Injectable()
export class booksService{
    data:any;
    constructor(private http:HttpClient ){

    }

    getLocalBooksData():Observable<RootBookObject>{
        return Observable.of(bookData);
    }
    getLocalBookById(id:number){
        return Observable.of(bookData.items[id]);
    }
    getBookById(id:string):Observable<Book>{
        return this.http.get<Book>(`https://www.googleapis.com/books/v1/volumes/${id}?&key=AIzaSyDOrRXsyLZ_t-VclF01nrSbUSAAGLGv3Sw`).map((res)=>{
            return res;
        })
    }

    getBooks():Observable<any>{
        if(typeof(this.data) == "undefined"){
            return this.http.get("https://www.googleapis.com/books/v1/volumes?q=a&fields=items&maxResults=40&key=AIzaSyDOrRXsyLZ_t-VclF01nrSbUSAAGLGv3Sw")
                .map(res=>{
                    this.data = res;    
                    return res;
                })
        }else{
            return Observable.of(this.data);
        }
        
    }

    getAllBooks(func:(arr:Array<any>)=>void){
        if(typeof(this.data) == "undefined"){
            let myFunc = (arr:Array<any>)=>{
                func(arr);
                this.data = arr ;
            }
            return this.http.get("https://www.googleapis.com/books/v1/volumes?q=a&maxResults=40&fields=items(saleInfo%2FlistPrice%2CvolumeInfo(authors%2Cdescription%2CimageLinks(smallThumbnail%2Cthumbnail)%2Clanguage%2CmainCategory%2CpageCount%2CpublishedDate%2Cpublisher%2Csubtitle%2Ctitle))&key=AIzaSyDOrRXsyLZ_t-VclF01nrSbUSAAGLGv3Sw")
                .subscribe(myFunc);
        }else{

            return func(this.data.items);
        }
    }

}
