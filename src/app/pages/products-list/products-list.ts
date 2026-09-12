import { Component, inject } from '@angular/core';
import { Products } from '../../services/product';
import { IProduct } from '../../interfaces/product';
import { ProductCard } from '../ui/product-card/product-card';
@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  templateUrl: './products-list.html',
})
export class ProductsList {

  private productService = inject(Products);
  products: IProduct[] = [];

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
