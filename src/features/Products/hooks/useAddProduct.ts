import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../api";
import { Product } from "../types/product";
import { useNavigate } from "react-router-dom";

export const useAddProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (product: Product) => addProduct(product),
    onSuccess: (result: Product) => {
      // queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.setQueryData(["products"], (products: Product[]) => [
        result,
        ...products,
      ]);
      //if you want to navigate to product page
      // queryClient.setQueryData(["products", result.id], result);
      // navigate(`/products/${result.id}`);
    },
  });
};
