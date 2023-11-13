import { CSSProperties, ReactNode } from "react";
import styles from "./Card.module.scss";

type CardProps = {
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
};

const Card = ({ children, onClick, style }: CardProps) => {
  return (
    <div onClick={onClick} style={style} className={styles["card"]}>
      {children}
    </div>
  );
};

export default Card;
