export interface Product {
  name: string | undefined;
  id?: string;

  title?: string;
  image?: string;

  price?: string;
  rating?: {
    rate: number;
    count: number;
  };
}
