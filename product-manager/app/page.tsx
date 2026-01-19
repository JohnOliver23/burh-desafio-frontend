"use client";

import { Plus, AlertCircle } from "lucide-react";

import { useHomePage } from "@/hooks/use-home-page";

import { Header } from "@/components/layout/header";
import { ProductList } from "@/components/produtct/product-list";

import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AddProductModal } from "@/components/produtct/add-product-modal";
import { EditProductModal } from "@/components/produtct/edit-product-modal";

export default function HomePage() {
  const {
    products,
    isLoading,
    isError,
    error,
    handleOpenAddModal,

    editingProduct,
    handleEdit,
    handleSaveEdit,
    handleCloseEditModal,
    isEditing,

    isAddModalOpen,
    handleCloseAddModal,
    handleCreate,
    isCreating,

    handleDelete,
  } = useHomePage();

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {isError && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Erro ao carregar produtos</AlertTitle>
            <AlertDescription>
              {error instanceof Error
                ? error.message
                : "Verifique se a API está configurada corretamente."}
            </AlertDescription>
          </Alert>
        )}

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Produtos Cadastrados</h2>
            <p className="text-muted-foreground">
              {products.length}{" "}
              {products.length === 1
                ? "produto encontrado"
                : "produtos encontrados"}
            </p>
          </div>

          <Button onClick={handleOpenAddModal} size="lg">
            <Plus className="mr-2 h-5 w-5" />
            Adicionar Produto
          </Button>
        </div>

        <ProductList
          products={products}
          isLoading={isLoading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </main>
      <AddProductModal
        open={isAddModalOpen}
        onOpenChange={(open) => !open && handleCloseAddModal()}
        onSave={handleCreate}
        isLoading={isCreating}
      />
      <EditProductModal
        product={editingProduct}
        open={!!editingProduct}
        onOpenChange={handleCloseEditModal}
        onSave={handleSaveEdit}
        isLoading={isEditing}
      />
    </div>
  );
}
