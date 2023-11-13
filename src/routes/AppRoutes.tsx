import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import { PATH_CONSTANTS } from "./pathConstants";
import PublicRoute from "./PublicRoute";
import NotFound from "pages/NotFound";
const Login = lazy(() => import("../pages/Login"));
const Products = lazy(() => import("../pages/Products"));
const ProductViewPage = lazy(() => import("../pages/ProductViewPage"));
const Categories = lazy(() => import("../pages/Categories"));

const appRoutes = () => (
  <Suspense fallback={<div>loading...</div>}>
    <Routes>
      <Route element={<PublicRoute redirectPath={PATH_CONSTANTS.PRODUCTS} />}>
        <Route path={PATH_CONSTANTS.LOGIN} element={<Login />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route element={<ProtectedRoute redirectPath={PATH_CONSTANTS.LOGIN} />}>
          <Route path={PATH_CONSTANTS.PRODUCTS} element={<Products />} />
          <Route
            path={`${PATH_CONSTANTS.PRODUCTS}/:id`}
            element={<ProductViewPage />}
          />
          <Route path={PATH_CONSTANTS.CATEGORIES} element={<Categories />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default appRoutes;
