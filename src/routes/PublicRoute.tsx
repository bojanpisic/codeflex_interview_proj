import { useAuth } from "hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

type PublicRouteProps = {
  children?: React.ReactNode;
  redirectPath: string;
};

const PublicRoute = ({ children, redirectPath }: PublicRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <Navigate to={redirectPath} replace />;
  return !!children ? <>{children}</> : <Outlet />;
};

export default PublicRoute;
