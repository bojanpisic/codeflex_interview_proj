import { axios } from "lib/axios";

export const getCategories = async () => {
  const { data } = await axios.get("/products/categories");

  return data;
};

export const getProductsByCategory = async (category: string) => {
  const { data } = await axios.get(`/products/category/${category}`);

  return data;
};
