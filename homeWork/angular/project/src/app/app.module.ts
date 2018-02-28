// ANGULAR CORE MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import {RouterModule } from '@angular/router';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//  MODULES
import {AppRouterModule} from './app-router/app-router.module';

//  SERVICES
import { booksService } from './shared/services/books.service';
import { countriesService } from './shared/services/countries.service';
import { accountService } from './shared/services/account.service';

//  DIRECTIVES
import { HoverDirective} from './shared/directives/hover.directive';
import { PriceDirective } from './shared/directives/price.directive';
import { CurrencyDirective } from './shared/directives/currency.directive';

//  PIPES
import { StrPipePipe } from './shared/pipes/str-pipe.pipe';

//  COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { CartComponent } from './cart/cart.component';


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
    CurrencyDirective,
    ErrorComponent,
    LogoutComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRouterModule,
    ModalModule.forRoot()
  ],
  providers: [countriesService,booksService , accountService],
  bootstrap: [AppComponent]
})
export class AppModule { }

