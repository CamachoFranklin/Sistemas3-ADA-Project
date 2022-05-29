import { object, string } from 'yup'

export const loginSchema = object({
  email: string()
    .email('El email debe ser válido')
    .max(100, 'El email debe contener máximo 100 caracteres')
    .required('El email es requerido'),
  password: string()
    .min(8, 'La contraseña debe contener al menos 8 caracteres')
    .max(16, 'La contraseña debe contener máximo 16 caracteres')
    .required('La contraseña es requerida'),
}).required()

export const loginDefaultValues = {
  email: '',
  password: '',
}