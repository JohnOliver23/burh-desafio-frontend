export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  createdAt: string;
  available: boolean;
}

export interface CreateProductDTO {
  name: string;
  description: string;
  price: number;
  quantity: number;
  createdAt: string;
  available: boolean;
}

export interface UpdateProductDTO extends CreateProductDTO {}
