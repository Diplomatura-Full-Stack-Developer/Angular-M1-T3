import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { inject } from '@angular/core';
import { PRODUCT_FORM_SCHEMA, ProductField, fieldErrorMessage } from '../../validators/product-form.validator';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-add-product-form',
  imports: [ReactiveFormsModule, MatDialogModule, NgClass],
  templateUrl: './add-product-form.html',
})
export class AddProductForm {
  title: string = 'Nuevo producto';

  private formBuilder = inject(FormBuilder);
  private dialog = inject(MatDialog);

  productForm = this.formBuilder.group({
    type: ['', PRODUCT_FORM_SCHEMA.type.validators],
    brand: ['', PRODUCT_FORM_SCHEMA.brand.validators],
    model: ['', PRODUCT_FORM_SCHEMA.model.validators],
    price: ['', PRODUCT_FORM_SCHEMA.price.validators],
    offer: false,
    stock: ['', PRODUCT_FORM_SCHEMA.stock.validators],
    imageUrl: 'no-image.png',
    features: ['', PRODUCT_FORM_SCHEMA.features.validators],
    deleted: false,
  });

  isInvalid(field: ProductField): boolean {
    const control = this.productForm.controls[field];
    return control.touched && control.invalid;
  }

  errorMessage(field: ProductField): string | null {
    return fieldErrorMessage(field, this.productForm.controls[field]);
  }

  onSubmit() {
    if (this.productForm.invalid) {
      console.log('Formulario inválido');
      this.productForm.markAllAsTouched();
      return;
    }

    console.log(this.productForm.value); // TODO: Add product to the database

  }


}
