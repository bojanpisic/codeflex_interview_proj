import { useMutation } from "@tanstack/react-query";
import { logIn } from "features/auth/api";
import { ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import storage from "utils/storage";

interface LoginCredentials {
  username: string;
  password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  handleSuccessfullLogin: () => void;
  logOut: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  handleSuccessfullLogin: () => {},
  logOut: () => {},
});

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!storage.getToken("access_token")
  );

  const handleSuccessfullLogin = () => {
    setIsAuthenticated(true);
  };

  const logOut = () => {
    setIsAuthenticated(false);
    storage.clearToken("access_token");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, handleSuccessfullLogin, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
