import { inject, Service, signal } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
@Service()
export class Products {

  private apiUrl = 'data/products.json';

  private http = inject(HttpClient);

  products = signal<IProduct[]>([]);

  loadProducts(): void {

    if (this.products().length > 0) {
      return;
    }
    this.http.get<IProduct[]>(this.apiUrl).subscribe((prod) => {
      this.products.set(prod.map((product) => ({ ...product, id: crypto.randomUUID() })));
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
    this.products.set([...this.products()!, product]);
  }
}
