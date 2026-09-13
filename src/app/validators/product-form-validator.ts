import { Validators } from '@angular/forms';
import type { AbstractControl } from '@angular/forms';

export const REGISTER_FORM_SCHEMA = {
  name: {
    validators: [Validators.required, Validators.minLength(3)],
    messages: {
      required: 'El nombre es obligatorio.',
      minlength: 'Mínimo 3 caracteres.',
    },
  },
  email: {
    validators: [Validators.required, Validators.email],
    messages: {
      required: 'El email es obligatorio.',
      email: 'Introduce un email válido.',
    },
  },
  message: {
    validators: [Validators.required, Validators.minLength(3)],
    messages: {
      required: 'El mensaje es obligatorio.',
      minlength: 'Mínimo 3 caracteres.',
    },
  },
} as const;

export type RegisterField = keyof typeof REGISTER_FORM_SCHEMA;

export function fieldErrorMessage(
  field: RegisterField,
  control: AbstractControl | null,
): string | null {
  if (!control?.touched || !control.errors) {
    return null;
  }

  const errorKey = Object.keys(control.errors)[0];
  const messages: Record<string, string> = REGISTER_FORM_SCHEMA[field].messages;
  return messages[errorKey] ?? null;
}
