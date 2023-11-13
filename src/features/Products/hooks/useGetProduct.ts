import { useQuery } from "@tanstack/react-query";
import { Product } from "../types/product";
import { getProduct } from "../api";

export const useGetProduct = (productId?: string) => {
  return useQuery<Product>({
    queryKey: ["products", productId],
    queryFn: () => getProduct(productId!),
    enabled: !!productId,
  });
};
