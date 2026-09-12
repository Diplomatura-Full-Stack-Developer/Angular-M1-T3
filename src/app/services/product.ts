import { Service } from '@angular/core';
import { products } from '../data/products';
import { IProduct } from '../interfaces/product';

@Service()
export class Products {

  getProducts(): IProduct[] {
    return products;
  }

  getProduct(id: string): IProduct {
    const product = products.find(product => product.id === id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  createProduct(product: IProduct): void {
    products.push(product);
  }

  updateProduct(product: IProduct): void {
    const index = products.findIndex(p => p.id === product.id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    products[index] = product;
  }

  deleteProduct(id: string): void {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    products[index].deleted = true;
  }

}
