import { Base } from "types/base";

export type Product = {
  description: string;
  price: number;
  title: string;
  image: string;
  category: string;
} & Base;
