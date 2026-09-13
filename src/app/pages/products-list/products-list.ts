import { Component, inject } from '@angular/core';
import { Products } from '../../services/product';
import { ProductCard } from '../ui/product-card/product-card';
import { IProduct } from '../../interfaces/product';
import { signal } from '@angular/core';
@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  templateUrl: './products-list.html',
})
export class ProductsList {

  private productService = inject(Products);
  products = signal<IProduct[]>([]);

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: IProduct[]) => {
      this.products.set(products);
    });
  }
}

