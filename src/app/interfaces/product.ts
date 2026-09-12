export interface IProduct {
  id: number;
  deleted: boolean;
  type: string;
  brand: string;
  model: string;
  price: number;
  offer: boolean;
  stock: number;
  imageUrl: string;
  features: string[];
}
