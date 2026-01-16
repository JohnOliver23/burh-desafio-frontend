"use client";

import { Package } from "lucide-react";

import type { Product } from "@/types/product";
import { ProductCard } from "./product-card";
import { ProductCardSkeleton } from "./product-card-skeleton";

interface ProductListProps {
  products: Product[];
  isLoading: boolean;
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
}

export function ProductList({
  products,
  isLoading,
  onEdit,
  onDelete,
}: ProductListProps) {
  // Estado de carregamento
  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  // Estado vazio
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-16">
        <Package className="h-16 w-16 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-semibold">
          Nenhum produto encontrado
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Clique em <strong>Adicionar Produto</strong> para cadastrar seu
          primeiro produto.
        </p>
      </div>
    );
  }

  // Lista de produtos
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
