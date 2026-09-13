import { Component, inject } from '@angular/core';
import { Products } from '../../services/product.service';
import { ProductCard } from '../ui/product-card/product-card';
import { computed } from '@angular/core';
import { IProduct } from '../../interfaces/product';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-products-list',
  imports: [ProductCard, RouterLink],
  templateUrl: './products-list.html',
})
export class ProductsList implements OnInit {

  private productService = inject(Products);

  ngOnInit(): void {
    this.productService.loadProducts();
  }

  products = computed(() =>
    this.productService.products()?.filter((product: IProduct) => !product.deleted),
  );
}

