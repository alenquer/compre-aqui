declare interface IProductItemProps {
  id?: string;
  avatar: string;
  name: string;
  price: number;
  author: string;
  sku: string;
  createdAt?: string;
  updatedAt?: string;
}

declare interface IFilterProps {
  id: string;
  name: string;
  search?: string;
}

declare interface IRevalidated {
  revalidated: boolean;
}
