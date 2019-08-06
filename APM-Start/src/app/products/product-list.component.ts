import { Component } from "@angular/core";
import { IProduct } from "src/app/products/product";
import { OnInit } from "@angular/core";
import { ProductService } from "./product.service";

@Component(
  {
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
  })
export class ProductListComponent implements OnInit {

  showImage: boolean = true;
  imageWidth: number = 50;
  imageMargin: number = 2;
  _listFilter: string;
  filteredProducts: IProduct[];
  pageTitle: string = 'Product List';
  products: IProduct[] = [];

  constructor(private productsService: ProductService) {
    this.products = [];
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLowerCase().indexOf(filterBy) !== -1);
  }

onRatingClicked(message: string): void {
 this.pageTitle = 'Product List: ' + message;
}

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.filteredProducts = this.products;
    this.listFilter = '';
  }

}
