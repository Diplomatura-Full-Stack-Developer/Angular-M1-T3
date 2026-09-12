import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IProduct } from '../../../interfaces/product';
import { CurrencyPipe } from '@angular/common';
import { inject } from '@angular/core';
import { Products } from '../../../services/product';

@Component({
  selector: 'app-product-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, CurrencyPipe],
  templateUrl: './product-card.html',
})
export class ProductCard {
  private productService = inject(Products);
  @Input() product: IProduct = {
    id: 0,
    deleted: false,
    model: '',
    type: '',
    brand: '',
    price: 0,
    stock: 0,
    offer: false,
    imageUrl: '',
    features: [],
  } as IProduct;

  deleteProduct(model: string) {
    this.productService.deleteProduct(model);
  }
}
