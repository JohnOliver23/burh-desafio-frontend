"use client";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Pencil, Trash2, Calendar, DollarSign, Package } from "lucide-react";

import type { Product } from "@/types/product";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
}

// Formatador de moeda brasileira
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export function ProductCard({ product, onEdit, onDelete }: ProductCardProps) {
  return (
    <Card className="flex flex-col transition-all duration-200 hover:shadow-lg hover:border-primary/20">
      <CardHeader className="pb-4">
        <div className="flex flex-col">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <CardTitle className="truncate text-xl font-bold">
                {product.name}
              </CardTitle>
            </div>
            <CardAction>
              <Badge
                variant={product.available ? "default" : "secondary"}
                className={cn(
                  "px-3 py-1 text-xs font-medium",
                  product.available && "bg-green-600 hover:bg-green-700"
                )}
              >
                {product.available ? "Disponível" : "Indisponível"}
              </Badge>
            </CardAction>
          </div>
          <CardDescription className="mt-2 line-clamp-2 leading-relaxed text-muted-foreground/80">
            {product.description}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="flex-1 pt-4 border-t border-border/50">
        <div className="grid grid-cols-2 gap-6">
          {/* Preço */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-950/30">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/50">
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Preço
              </p>
              <p className="font-bold text-lg text-green-600">
                {formatCurrency(product.price)}
              </p>
            </div>
          </div>

          {/* Quantidade */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50">
              <Package className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Estoque
              </p>
              <p className="font-bold text-lg text-blue-600">
                {product.quantity} un.
              </p>
            </div>
          </div>

          {/* Data de cadastro */}
          <div className="col-span-2 flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted">
              <Calendar className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Cadastrado em
              </p>
              <p className="text-sm font-medium">
                {format(new Date(product.createdAt), "dd 'de' MMMM 'de' yyyy", {
                  locale: ptBR,
                })}
              </p>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="gap-3 border-t pt-5 pb-5">
        <Button
          variant="outline"
          size="default"
          className="flex-1 bg-transparent"
          onClick={() => onEdit(product)}
        >
          <Pencil className="mr-2 h-4 w-4" />
          Editar
        </Button>
        <Button
          variant="destructive"
          size="default"
          className="flex-1"
          onClick={() => onDelete(product)}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Excluir
        </Button>
      </CardFooter>
    </Card>
  );
}
