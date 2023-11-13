import { ReactNode, createContext, useCallback, useState } from "react";
import { BreadCrumbRoute } from "types/breadcrumbRoute";

type BreadCrumbContextType = {
  addPaths: (newPaths: BreadCrumbRoute[]) => void;
  removePaths: (ids: string[]) => void;
  paths: BreadCrumbRoute[];
};

const BreadCrumbContext = createContext<BreadCrumbContextType>({
  addPaths: () => {},
  removePaths: () => {},
  paths: [],
});

type BreacCrumbProviderProps = {
  children: ReactNode;
};

export const BreadCrumbProvider = ({ children }: BreacCrumbProviderProps) => {
  const [paths, setPaths] = useState<BreadCrumbRoute[]>([]);

  const addPaths = useCallback((newPaths: BreadCrumbRoute[]) => {
    setPaths((prevState) => [...prevState, ...newPaths]);
  }, []);

  const removePaths = useCallback((ids: string[]) => {
    setPaths((prevState) => prevState.filter((path) => !ids.includes(path.id)));
  }, []);

  return (
    <BreadCrumbContext.Provider value={{ paths, addPaths, removePaths }}>
      {children}
    </BreadCrumbContext.Provider>
  );
};

export default BreadCrumbContext;
