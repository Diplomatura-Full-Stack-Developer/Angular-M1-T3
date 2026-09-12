import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { ProductsList } from '../../pages/products-list/products-list';
@Component({
  selector: 'app-main-layout',
  imports: [Header, Footer, ProductsList],
  templateUrl: './main-layout.html',
})
export class MainLayout {


}
