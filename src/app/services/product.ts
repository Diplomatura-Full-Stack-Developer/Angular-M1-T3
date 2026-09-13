import { inject, Service, signal } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';

@Service()
export class Products {

  private apiUrl = 'data/products.json';

  private http = inject(HttpClient);

  products = signal<IProduct[]>([]);

  loadProducts(): void {
    this.http.get<IProduct[]>(this.apiUrl).subscribe((products) => {
      this.products.set(products);
    });
  }

  deleteProduct(id: string): void {
    this.products.update((list) =>
      list.map((product) =>
        product.id === id ? { ...product, deleted: true } : product,
      ),
    );
  }

  addProduct(product: IProduct): void {
    this.products.update((list) => [...list, product]);
  }
}
