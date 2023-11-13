import { useBreadCrumb } from "hooks/useBreadCrumb";
import styles from "./BreadCrumb.module.scss";

const BreadCrumb = () => {
  const { paths } = useBreadCrumb();
  return (
    <div className={styles["breadcrumb-wrapper"]}>
      {paths?.map((path, index, arr) => (
        <span key={path.id}>
          {path.label}
          {index !== arr.length - 1 && <span>&rarr;</span>}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumb;
