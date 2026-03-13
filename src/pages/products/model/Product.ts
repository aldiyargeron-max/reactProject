export interface ProductModel {
  id: number;
  name: string;
  price: number;
}

export const products: ProductModel[] = [
  { id: 1, name: "Банан", price: 600 },
  { id: 2, name: "Яблоко", price: 800 },
  { id: 3, name: "Апельсин", price: 1000 },
  { id: 4, name: "Киви", price: 1200 },
  { id: 5, name: "Ананас", price: 1400 },
];