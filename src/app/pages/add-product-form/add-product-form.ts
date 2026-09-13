import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { inject } from '@angular/core';
import { REGISTER_FORM_SCHEMA, RegisterField, fieldErrorMessage } from '../../validators/product-form-validator';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgClass, NgStyle } from '@angular/common';



@Component({
  selector: 'app-add-product-form',
  imports: [ReactiveFormsModule, MatDialogModule, NgClass, NgStyle],
  templateUrl: './add-product-form.html',
})
export class AddProductForm {
  title: string = 'Nuevo producto';

  private formBuilder = inject(FormBuilder);
  private dialog = inject(MatDialog);

  registerForm = this.formBuilder.group({
    name: ['', REGISTER_FORM_SCHEMA.name.validators],
    email: ['', REGISTER_FORM_SCHEMA.email.validators],
    message: ['', REGISTER_FORM_SCHEMA.message.validators],
  });

  isInvalid(field: RegisterField): boolean {
    const control = this.registerForm.controls[field];
    return control.touched && control.invalid;
  }

  errorMessage(field: RegisterField): string | null {
    return fieldErrorMessage(field, this.registerForm.controls[field]);
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      console.log('Formulario inválido');
      this.registerForm.markAllAsTouched();
      return;
    }

    console.log(this.registerForm.value); // TODO: Add product to the database

  }


}
