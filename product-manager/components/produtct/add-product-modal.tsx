"use client";

import type { ProductFormData } from "@/lib/validations/product";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProductForm } from "./product-form";

interface AddProductModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (data: ProductFormData) => void;
  isLoading?: boolean;
}

export function AddProductModal({
  open,
  onOpenChange,
  onSave,
  isLoading = false,
}: AddProductModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Novo Produto</DialogTitle>
          <DialogDescription>
            Preencha os dados para cadastrar um novo produto.
          </DialogDescription>
        </DialogHeader>

        <ProductForm
          onSubmit={(data) => {
            onSave(data);
          }}
          isLoading={isLoading}
          submitLabel="Cadastrar"
        />
      </DialogContent>
    </Dialog>
  );
}
