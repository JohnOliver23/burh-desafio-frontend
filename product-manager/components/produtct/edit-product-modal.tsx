"use client";

import type { Product } from "@/types/product";
import type { ProductFormData } from "@/lib/validations/product";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProductForm } from "./product-form";

interface EditProductModalProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (data: ProductFormData) => void;
  isLoading?: boolean;
}

export function EditProductModal({
  product,
  open,
  onOpenChange,
  onSave,
  isLoading = false,
}: EditProductModalProps) {
  if (!product) return null;
  const defaultValues: ProductFormData = {
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: product.quantity,
    createdAt: product.createdAt,
    available: product.available,
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Editar Produto</DialogTitle>
          <DialogDescription>
            Atualize as informações do produto abaixo.
          </DialogDescription>
        </DialogHeader>

        <ProductForm
          defaultValues={defaultValues}
          onSubmit={onSave}
          isLoading={isLoading}
          submitLabel="Salvar Alterações"
        />
      </DialogContent>
    </Dialog>
  );
}
