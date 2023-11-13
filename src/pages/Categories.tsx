import CategoriesList from "features/Categories/components/CategoriesList/CategoriesList";
import { useBreadCrumb } from "hooks/useBreadCrumb";
import { useEffect } from "react";
import { PATH_CONSTANTS } from "routes/pathConstants";

const Categories = () => {
  const { addPaths, removePaths } = useBreadCrumb();

  useEffect(() => {
    addPaths([
      {
        id: "categories",
        label: "Categories",
        path: PATH_CONSTANTS.CATEGORIES,
      },
    ]);

    return () => {
      removePaths(["categories"]);
    };
  }, [addPaths, removePaths]);
  return <CategoriesList />;
};

export default Categories;
