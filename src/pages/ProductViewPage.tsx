import ProductView from "features/Products/components/ProductView/ProductView";
import { useNavigate } from "react-router-dom";

const ProductViewPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);
  return (
    <>
      <div
        onClick={handleGoBack}
        style={{ fontSize: "20px", fontWeight: "bold" }}
      >
        Go Back
      </div>
      <ProductView />
    </>
  );
};

export default ProductViewPage;
