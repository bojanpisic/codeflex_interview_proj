import { useGetProductByCategory } from "features/Categories/hooks/useGetProductsByCategory";
import styles from "./CategoryProductsList.module.scss";
import { useNavigate } from "react-router-dom";
import { PATH_CONSTANTS } from "routes/pathConstants";
import Button from "components/Button/Button";

type CategoryProductsListProps = {
  category: string;
};

const CategoryProductsList = ({ category }: CategoryProductsListProps) => {
  const {
    data: productsByCategory,
    isLoading,
    isFetched,
  } = useGetProductByCategory(category);

  const navigate = useNavigate();

  const onProductView = (productId: string) =>
    navigate(`${PATH_CONSTANTS.PRODUCTS}/${productId}`);

  return (
    <>
      {isLoading && <div>Loading products...</div>}
      {isFetched && !productsByCategory?.length && <div>No Products</div>}
      {isFetched && productsByCategory?.length && (
        <div className={styles["products-list"]}>
          {productsByCategory.map((p) => (
            <div key={p.id} className={styles["product-item"]}>
              <span>{p.title}</span>
              <Button onClick={() => onProductView(p.id)}>View</Button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CategoryProductsList;
