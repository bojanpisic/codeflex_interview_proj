import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api";

export const useGetCategories = () => {
  return useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};
