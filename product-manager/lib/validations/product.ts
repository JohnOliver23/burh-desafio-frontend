import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),

  description: z
    .string()
    .min(10, "Descrição deve ter pelo menos 10 caracteres")
    .max(500, "Descrição deve ter no máximo 500 caracteres"),

  price: z.coerce
    .number()
    .positive("Preço deve ser maior que zero")
    .max(999999.99, "Preço máximo é R$ 999.999,99"),

  quantity: z.coerce
    .number()
    .int("Quantidade deve ser um número inteiro")
    .min(0, "Quantidade não pode ser negativa")
    .max(99999, "Quantidade máxima é 99.999"),

  createdAt: z.string().min(1, "Data de cadastro é obrigatória"),

  available: z.boolean(),
});

export type ProductFormData = z.infer<typeof productSchema>;
