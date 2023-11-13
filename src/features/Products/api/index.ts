import { axios } from "lib/axios";
import { Product } from "../types/product";

export const getProducts = async () => {
  const { data } = await axios.get<Product[]>("/products");
  return data;
};

export const deleteProduct = async (productId: string) => {
  const { data } = await axios.delete<Product>(`/products/${productId}`);
  return data;
};

export const addProduct = async (product: Product) => {
  const { data } = await axios.post<Product>("/products", { ...product });
  return data;
};

export const getProduct = async (productId: string) => {
  const { data } = await axios.get<Product>(`/products/${productId}`);
  return data;
};
