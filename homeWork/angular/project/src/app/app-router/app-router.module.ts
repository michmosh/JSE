import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { MainComponent } from '../main/main.component';
import { ProductsComponent } from '../products/products.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'products' , component:ProductsComponent},
  {path:'products/:id' , component:ProductDetailComponent}
  
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRouterModule { }
