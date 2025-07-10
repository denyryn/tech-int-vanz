export type ProductType = {
  name: string;
  description: string;
  image: string;
  price: number;
};

export type CategoryType = {
  name: string;
  items: ProductType[];
};
