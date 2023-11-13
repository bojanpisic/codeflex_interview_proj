import ProductsList from "features/Products/components/ProductsList/ProductsList";
import { useBreadCrumb } from "hooks/useBreadCrumb";
import { useEffect } from "react";
import { PATH_CONSTANTS } from "routes/pathConstants";

const Products = () => {
  const { addPaths, removePaths } = useBreadCrumb();

  useEffect(() => {
    addPaths([
      {
        id: "products",
        label: "Products",
        path: PATH_CONSTANTS.PRODUCTS,
      },
    ]);

    return () => {
      removePaths(["products"]);
    };
  }, [addPaths, removePaths]);

  return <ProductsList />;
};

export default Products;
