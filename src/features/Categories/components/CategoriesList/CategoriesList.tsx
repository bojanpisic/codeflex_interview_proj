import Accordion from "components/Accordion/Accordion";
import { useGetCategories } from "features/Categories/hooks/useGetProducts";
import CategoryProductsList from "../CategoryProductsList/CategoryProductsList";

const CategoriesList = () => {
  const { data: categories } = useGetCategories();

  return (
    <>
      {categories?.map((category) => (
        <Accordion title={category} key={category}>
          <CategoryProductsList category={category} />
        </Accordion>
      ))}
    </>
  );
};

export default CategoriesList;
