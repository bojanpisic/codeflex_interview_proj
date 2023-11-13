import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../api";
import { Product } from "features/Products/types/product";

export const useGetProductByCategory = (category: string) => {
  return useQuery<Product[]>({
    queryKey: ["productsByCategory", category],
    queryFn: () => getProductsByCategory(category),
  });
};
