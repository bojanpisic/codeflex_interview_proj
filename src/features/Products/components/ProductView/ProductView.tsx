import { useGetProduct } from "features/Products/hooks/useGetProduct";
import { useBreadCrumb } from "hooks/useBreadCrumb";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PATH_CONSTANTS } from "routes/pathConstants";

const ProductView = () => {
  const { id } = useParams();

  const { data: product, isLoading } = useGetProduct(id);

  const { addPaths, removePaths } = useBreadCrumb();

  useEffect(() => {
    if (!!product) {
      addPaths([
        {
          id: "products",
          label: "Products",
          path: PATH_CONSTANTS.PRODUCTS,
        },
        {
          id: "products/item",
          label: `${product.title}`,
          path: PATH_CONSTANTS.PRODUCTS,
        },
      ]);
    }

    return () => {
      if (!!product) removePaths(["products", "products/item"]);
    };
  }, [addPaths, removePaths, product]);

  return (
    <>
      {product && (
        <>
          <div className="title">{product.title}</div>
          <img src={product.image} alt={product.title} />
        </>
      )}
    </>
  );
};

export default ProductView;
