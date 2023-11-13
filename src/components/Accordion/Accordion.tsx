import { ReactNode, useState } from "react";
import styles from "./Accordion.module.scss";

type AccordionProps = {
  title: string;
  children: ReactNode;
};

const Accordion = ({ title, children }: AccordionProps) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div
      className={styles["accordion"]}
      onClick={() => setShowContent((prev) => !prev)}
    >
      <div className={styles["accordion-header"]}>
        <span className={styles["header-title"]}>{title}</span>
        <span
          className={`${styles["header-arrow"]} ${
            showContent ? styles["header-arrow--active"] : ""
          }`}
        >
          &#129131;
        </span>
      </div>
      {showContent && (
        <div className={styles["accordion-content"]}>{children}</div>
      )}
    </div>
  );
};

export default Accordion;
