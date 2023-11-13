import { useQuery } from "@tanstack/react-query";
import { Product } from "../types/product";
import { getProducts } from "../api";

export const useGetProducts = () => {
  return useQuery<Product[]>({ queryKey: ["products"], queryFn: getProducts });
};
