import Card from "components/Card/Card";
import ProductItem from "../ProductItem/ProductItem";
import { useGetProducts } from "../../hooks/useGetProducts";
import styles from "./ProductsList.module.scss";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import ProductForm from "../ProductForm/ProductForm";
import { Product } from "../../types/product";
import { useState } from "react";
import { useAddProduct } from "features/Products/hooks/useAddProduct";

const ProductsList = () => {
  const [addProduct, setAddProduct] = useState(false);
  const { data: products, isLoading, isFetched } = useGetProducts();
  const { mutateAsync: addProductMutation } = useAddProduct();
  const showAddProductModal = () => setAddProduct(true);
  const handleAddProduct = async (product: Product) => {
    const result = await addProductMutation(product);
    setAddProduct(false);
  };
  return (
    <>
      {isLoading && <div>Loading products..</div>}
      {isFetched && !products?.length && <div>No products</div>}
      {isFetched && products?.length && (
        <div className={styles["products-list"]}>
          <Card onClick={showAddProductModal}>
            <div className="title">Add Product</div>
          </Card>
          {products?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
          {addProduct && (
            <Modal title="Add product" onClose={() => setAddProduct(false)}>
              <ProductForm
                onFormSubmit={handleAddProduct}
                initialVal={{} as Product}
              />
            </Modal>
          )}
        </div>
      )}
    </>
  );
};

export default ProductsList;
