import { Service } from '@angular/core';
import { products } from '../data/products';
import { IProduct } from '../interfaces/product';

@Service()
export class Products {

  getProducts(): IProduct[] {
    return products;
  }

  getProduct(id: string): IProduct {
    const product = products.find(product => product.model === id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  createProduct(product: IProduct): void {
    products.push(product);
  }

  updateProduct(product: IProduct): void {
    const index = products.findIndex(p => p.model === product.model);
    if (index === -1) {
      throw new Error('Product not found');
    }
    products[index] = product;
  }

  deleteProduct(id: string): void {
    const index = products.findIndex(p => p.model === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    products[index].deleted = true;
  }

}
