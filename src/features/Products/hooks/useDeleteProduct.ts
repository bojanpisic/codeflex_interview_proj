import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../api";
import { Product } from "../types/product";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: (deletedProduct: Product) => {
      queryClient.setQueryData(["products"], (products: Product[]) =>
        products.filter((product) => product.id !== deletedProduct.id)
      );
    },
  });
};
