"use client";

import { useState } from "react";

import type { Product } from "@/types/product";

import {
  useProducts,
  useCreateProduct,
  useUpdateProduct,
  useDeleteProduct,
} from "@/hooks/use-products";

export function useHomePage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deletingProduct, setDeletingProduct] = useState<Product | null>(null);

  const { data: products = [], isLoading, isError, error } = useProducts();
  const createMutation = useCreateProduct();
  const updateMutation = useUpdateProduct();
  const deleteMutation = useDeleteProduct();

  const handleOpenAddModal = () => setIsAddModalOpen(true);
  const handleCloseAddModal = () => setIsAddModalOpen(false);

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
  };

  const handleDelete = (product: Product) => {
    setDeletingProduct(product);
  };

  return {
    products,
    isLoading,
    isError,
    error,

    isAddModalOpen,
    handleOpenAddModal,
    handleCloseAddModal,

    isCreating: createMutation.isPending,

    editingProduct,
    handleEdit,

    isEditing: updateMutation.isPending,

    deletingProduct,
    handleDelete,
    isDeleting: deleteMutation.isPending,
  };
}
