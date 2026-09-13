import { Routes } from '@angular/router';
import { MainLayout } from './shell/main-layout/main-layout';
import { ProductsList } from './pages/products-list/products-list';
import { AddProductForm } from './pages/add-product-form/add-product-form';


export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: ProductsList,
      },
      {
        path: 'add-product',
        component: AddProductForm,
      },
    ],
  },
];
