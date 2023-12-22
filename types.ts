export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: string;
}

export interface Product {
  images: any ;
  id: string ;
  category: string;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  image: Image[];
}
export interface Image {
  [x: string]: string ;
  id: string;
  name: string;
  value: string;
}
export interface Size {
  id: string;
  name: string;
  value: string;
}
export interface Color {
  id: string;
  name: string;
  value: string;
}
