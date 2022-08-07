import classNames from "classnames";
import { memo } from "react";
import { NavigationTabs } from "./navigation-tabs/navigation-tabs";
import { NavigationUserInfo } from "./navigation-user-info/navigation-user-info";
import styles from "./navigation.module.scss";

export interface NavigationProps {
  className?: string;
}

export const Navigation = memo<NavigationProps>(function Navigation({
  className,
}) {
  return (
    <nav className={classNames(styles.root, className)}>
      <NavigationUserInfo className={styles.sidebar} />

      <NavigationTabs className={styles.content} />
    </nav>
  );
});
