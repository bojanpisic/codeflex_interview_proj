import Button from "components/Button/Button";
import { Product } from "../../types/product";
import styles from "./ProductItem.module.scss";
import { useDeleteProduct } from "../../hooks/useDeleteProduct";
import Card from "components/Card/Card";
import { useNavigate } from "react-router-dom";
import { PATH_CONSTANTS } from "routes/pathConstants";

type ProductItemProps = {
  product: Product;
};

const ProductItem = ({ product }: ProductItemProps) => {
  const { mutate: deleteProductMutation } = useDeleteProduct();
  const navigate = useNavigate();

  const handleOnDelete = () => {
    deleteProductMutation(product.id);
  };

  const handleOnView = () =>
    navigate(`${PATH_CONSTANTS.PRODUCTS}/${product.id}`);

  return (
    <>
      <Card>
        <div className="title">{product.title}</div>
        <img
          className={styles["image"]}
          src={product.image}
          alt={product.title}
        />
        <div className="actions">
          <Button onClick={handleOnDelete}>Delete</Button>
          <Button onClick={handleOnView}>View</Button>
        </div>
      </Card>
    </>
  );
};

export default ProductItem;
