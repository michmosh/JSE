import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import {AppRouterModule} from './app-router/app-router.module';
import {RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { countriesService } from './shared/services/countries.service';
import { HoverDirective} from './shared/directives/hover.directive';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { booksService } from './shared/services/books.service';
import { HomeComponent } from './home/home.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { StrPipePipe } from './shared/pipes/str-pipe.pipe';
import { PriceDirective } from './shared/directives/price.directive';
import { CurrencyDirective } from './shared/directives/currency.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RegisterComponent,
    LoginComponent,
    DropdownComponent,
    HoverDirective,
    ProductsComponent,
    ProductDetailComponent,
    HomeComponent,
    ProductPreviewComponent,
    StrPipePipe,
    PriceDirective,
    CurrencyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRouterModule,
    ModalModule.forRoot()
  ],
  providers: [countriesService,booksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

