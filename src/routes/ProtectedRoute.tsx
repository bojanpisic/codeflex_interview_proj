import { useAuth } from "hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

type ProtectedRouteProps = {
  children?: React.ReactNode;
  redirectPath: string;
};

const ProtectedRoute = ({ children, redirectPath }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to={redirectPath} replace />;
  return !!children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
