import { Routes } from '@angular/router';
import { MainLayout } from './shell/main-layout/main-layout';
import { ProductsList } from '../app/features/products/pages/products-list/products-list';
import { AddProductForm } from '../app/features/products/pages/add-product-form/add-product-form';


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
