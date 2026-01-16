import api from "@/lib/axios";
import type {
  Product,
  CreateProductDTO,
  UpdateProductDTO,
} from "@/types/product";

const RESOURCE = "/products";

export const productService = {
  getAll: async (): Promise<Product[]> => {
    const response = await api.get<Product[]>(RESOURCE);
    return response.data;
  },

  getById: async (id: string): Promise<Product> => {
    const response = await api.get<Product>(`${RESOURCE}/${id}`);
    return response.data;
  },

  create: async (data: CreateProductDTO): Promise<Product> => {
    const response = await api.post<Product>(RESOURCE, data);
    return response.data;
  },

  update: async (id: string, data: UpdateProductDTO): Promise<void> => {
    await api.put(`${RESOURCE}/${id}`, data);
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`${RESOURCE}/${id}`);
  },
};
