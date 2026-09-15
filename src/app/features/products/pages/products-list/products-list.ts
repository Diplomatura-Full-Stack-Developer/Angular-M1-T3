import { Component, inject } from '@angular/core';
import { ProductCard } from '../ui/product-card/product-card';
import { computed } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Products } from '../../services/product.service';
import { IProduct } from '../../interfaces/product.interface';


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

