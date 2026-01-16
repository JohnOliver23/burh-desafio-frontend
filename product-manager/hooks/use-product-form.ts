"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { productSchema, type ProductFormData } from "@/lib/validations/product";

interface UseProductFormProps {
  defaultValues?: Partial<ProductFormData>;
  onSubmit: (data: ProductFormData) => void;
}

export function useProductForm({
  defaultValues,
  onSubmit,
}: UseProductFormProps) {
  const form = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      quantity: 0,
      createdAt: new Date().toISOString().split("T")[0],
      available: true,
      ...defaultValues,
    },
  });

  useEffect(() => {
    if (defaultValues) {
      form.reset({
        name: "",
        description: "",
        price: 0,
        quantity: 0,
        createdAt: new Date().toISOString().split("T")[0],
        available: true,
        ...defaultValues,
      });
    }
  }, [defaultValues, form]);

  const handleSubmit = (data: ProductFormData) => {
    onSubmit(data);

    if (!defaultValues) {
      form.reset();
    }
  };

  return {
    form,
    handleSubmit,
  };
}
