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


  @Input() product: IProduct | undefined;

  deleteProduct(id: string) {
    console.log(id);
    this.productService.deleteProduct(id);
  }
}
