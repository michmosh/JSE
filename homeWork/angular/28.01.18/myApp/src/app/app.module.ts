import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// MD libraries
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
// PROJECT
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

//SERVICES
import {PizzasService} from './shared/services/pizzas.service';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatToolbarModule,
    MatDividerModule
    
  ],
  providers: [PizzasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
