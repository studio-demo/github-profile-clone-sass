import classNames from "classnames";
import { memo } from "react";
import { Icon } from "../../../../shared/icon/icon";
import type { Icons } from "../../../../shared/icon/icons";
import styles from "./navigation-tab.module.scss";

export interface ProfileTab {
  icon: Icons;
  name: string;
  counter?: number;
  isActive?: boolean;
}

export interface NavigationTabProps {
  className?: string;
  tab: ProfileTab;
}

export const NavigationTab = memo<NavigationTabProps>(function NavigationTabs({
  className,
  tab,
}) {
  return (
    <li
      className={classNames(
        styles.root,
        { [styles.active]: tab.isActive },
        className
      )}
    >
      <div className={styles.wrapper}>
        <Icon className={styles.icon} name={tab.icon} />
        <span>{tab.name}</span>
        {(tab.counter ?? 0) > 0 && (
          <span className={styles.badge}>{tab.counter}</span>
        )}
      </div>
    </li>
  );
});
