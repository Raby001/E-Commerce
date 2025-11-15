export interface category {
    name: string;
    productCount: number;
    color: string;
    image: string;
    group?: string;
}

export interface promotion {
  title: string
  buttonColor: string
  color: string
  image: string
  url?: string
}

export interface product {
    name: string;
    rating: string;
    size: string;
    image: string;
    price: number;
    promtionAsPerentage?: number;
    categoryId: string;
    instock: number;
    countSold: number;
    group?: string;
}

