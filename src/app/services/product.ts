import { inject, Service } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Service()
export class Products {

  private http = inject(HttpClient);


  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('data/products.json');
  }

}
