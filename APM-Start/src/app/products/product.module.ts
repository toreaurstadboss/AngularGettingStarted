import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from "src/app/products/product-list.component";
import { ProductDetailComponent } from "src/app/products/product-detail.component";
import { ProductDetailGuard } from "src/app/products/product-detail.guard";
import { ConvertToSpacesPipe } from "src/app/shared/convert-to-spaces.pipe";
import { StarComponent } from "src/app/shared/star.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductDetailGuard,
    ConvertToSpacesPipe,
    StarComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuard] }
    ])
  ]})
export class ProductModule {

  constructor(){
    library.add(fab, far, fas);
  }


 }
