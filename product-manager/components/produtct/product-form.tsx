"use client";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";

import { type ProductFormData } from "@/lib/validations/product";
import { cn } from "@/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useProductForm } from "@/hooks/use-product-form";

interface ProductFormProps {
  defaultValues?: Partial<ProductFormData>;
  onSubmit: (data: ProductFormData) => void;
  isLoading?: boolean;
  submitLabel?: string;
}

export function ProductForm({
  defaultValues,
  onSubmit,
  isLoading = false,
  submitLabel = "Cadastrar Produto",
}: ProductFormProps) {
  const { form, handleSubmit } = useProductForm({
    defaultValues,
    onSubmit,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className={fieldState.error && "text-red-500"}>
                Nome do Produto
              </FormLabel>
              <FormControl>
                <Input
                  className={
                    fieldState.error &&
                    "border-red-500 focus-visible:ring-transparent"
                  }
                  placeholder="Ex: Notebook Dell Inspiron"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className={fieldState.error && "text-red-500"}>
                Descrição
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Descreva as características do produto..."
                  className={`min-h-[100px] resize-none ${
                    fieldState.error &&
                    "border-red-500 focus-visible:ring-transparent"
                  }`}
                  {...field}
                />
              </FormControl>

              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <div className="grid gap-6 sm:grid-cols-1">
          <FormField
            control={form.control}
            name="price"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className={fieldState.error && "text-red-500"}>
                  Preço (R$)
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="0.00"
                    {...field}
                    onChange={(e) =>
                      field.onChange(Number.parseFloat(e.target.value) || 0)
                    }
                    className={
                      fieldState.error &&
                      "border-red-500 focus-visible:ring-transparent"
                    }
                  />
                </FormControl>

                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="quantity"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className={fieldState.error && "text-red-500"}>
                  Quantidade em Estoque
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="0"
                    placeholder="0"
                    {...field}
                    onChange={(e) =>
                      field.onChange(Number.parseInt(e.target.value) || 0)
                    }
                    className={
                      fieldState.error &&
                      "border-red-500 focus-visible:ring-transparent"
                    }
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-1">
          <FormField
            control={form.control}
            name="createdAt"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Data de Cadastro</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(new Date(field.value), "PPP", { locale: ptBR })
                        ) : (
                          <span>Selecione uma data</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent
                    className="z-[100] w-auto p-0 bg-background border border-border"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={field.value ? new Date(field.value) : undefined}
                      onSelect={(date) =>
                        field.onChange(
                          date ? date.toISOString().split("T")[0] : ""
                        )
                      }
                      disabled={(date) => date > new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>Data de entrada no sistema.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="available"
            render={({ field, fieldState }) => (
              <FormItem className="flex flex-col">
                <FormLabel className={fieldState.error && "text-red-500"}>
                  Disponibilidade
                </FormLabel>

                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="bg-green-900"
                  />
                </FormControl>
                <span className="text-sm text-muted-foreground">
                  {field.value
                    ? "Produto disponível para venda"
                    : "Produto indisponível"}
                </span>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          variant={"outline"}
          type="submit"
          className="w-full cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? "Salvando..." : submitLabel}
        </Button>
      </form>
    </Form>
  );
}
