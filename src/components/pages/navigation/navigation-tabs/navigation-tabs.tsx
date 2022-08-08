import classNames from "classnames";
import { memo } from "react";
import { NavigationTab, ProfileTab } from "./navigation-tab/navigation-tab";
import styles from "./navigation-tabs.module.scss";

export interface NavigationTabsProps {
  className?: string;
  tabs: ProfileTab[];
}

export const NavigationTabs = memo<NavigationTabsProps>(
  function NavigationTabs({ className, tabs = [] }) {
    return (
      <ul className={classNames(styles.root, className)}>
        {tabs.length &&
          tabs.map((tab) => <NavigationTab tab={tab} key={tab.name} />)}
      </ul>
    );
  }
);
