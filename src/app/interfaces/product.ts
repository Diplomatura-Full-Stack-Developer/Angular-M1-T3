export interface IProduct {
  id: string;
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
