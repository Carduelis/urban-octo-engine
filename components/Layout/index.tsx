import { FC, ReactNode } from "react";
import { Footer } from "./Footer";
import styles from "./Layout.module.css";

export interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
};
