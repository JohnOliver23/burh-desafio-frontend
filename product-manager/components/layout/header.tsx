import { Package } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center gap-4 px-4">
        <Package className="h-6 w-6" />
        <div>
          <h1 className="text-lg font-semibold">Gerenciador de Produtos</h1>
          <p className="text-xs text-muted-foreground">
            Sistema CRUD - Teste Técnico
          </p>
        </div>
      </div>
    </header>
  );
}
