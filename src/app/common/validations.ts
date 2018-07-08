import { Validators, RequiredValidator } from '@angular/forms'

export const EmailValidation = [Validators.required, Validators.email]

/** Password validators */
export const PasswordValidation = [
  Validators.required,
  Validators.minLength(8),
  Validators.maxLength(50),
  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[!@#$%^&])[^ ]{8,}$'),
]
