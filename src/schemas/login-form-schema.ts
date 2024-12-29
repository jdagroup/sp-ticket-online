import { z } from 'zod';

const loginFormSchema = z.object({
  email: z
    .string()
    .email({ message: 'Alamat email tidak valid' })
    .min(1, { message: 'Email harus terdiri dari 1 karakter atau lebih' }),
  password: z
    .string()
    .min(1, { message: 'Kata sandi harus terdiri dari 1 karakter atau lebih' }),
});

export default loginFormSchema;
