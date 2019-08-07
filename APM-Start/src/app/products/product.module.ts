import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from "src/app/products/product-list.component";
import { ProductDetailComponent } from "src/app/products/product-detail.component";
import { ProductDetailGuard } from "src/app/products/product-detail.guard";
import { ConvertToSpacesPipe } from "src/app/shared/convert-to-spaces.pipe";
import { RouterModule } from "@angular/router";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductDetailGuard,
    ConvertToSpacesPipe,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuard] }
    ]),
    SharedModule
  ]})
export class ProductModule {

  constructor(){

  }


 }
