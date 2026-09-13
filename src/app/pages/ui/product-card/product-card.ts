import { Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IProduct } from '../../../interfaces/product';
import { CurrencyPipe } from '@angular/common';
import { Products } from '../../../services/product';

@Component({
  selector: 'app-product-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, CurrencyPipe],
  templateUrl: './product-card.html',
})
export class ProductCard {
  private productService = inject(Products);

  @Input() product: IProduct = {} as IProduct;


  deleteProduct(id: string): void {
    this.productService.deleteProduct(id)
  }

}
