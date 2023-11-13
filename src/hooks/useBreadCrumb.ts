import BreadCrumbContext from "context/breadCrumbContext";
import { useContext } from "react";

export const useBreadCrumb = () => useContext(BreadCrumbContext);
