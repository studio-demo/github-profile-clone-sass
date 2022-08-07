import classNames from "classnames";
import { memo, useContext } from "react";
import { AppContext } from "../../../app.context";
import { NavigationTab, ProfileTab } from "./navigation-tab/navigation-tab";
import styles from "./navigation-tabs.module.scss";

export interface NavigationTabsProps {
  className?: string;
}

export const NavigationTabs = memo<NavigationTabsProps>(
  function NavigationTabs({ className }) {
    const { navigationStats } = useContext(AppContext);

    const tabs: ProfileTab[] = [
      {
        icon: "overview",
        name: "Overview",
        isActive: true,
      },
      {
        icon: "repositories",
        name: "Repositories",
        counter: navigationStats?.data?.reposCount ?? 0,
      },
      {
        icon: "project",
        name: "Projects",
      },
      {
        icon: "package",
        name: "Packages",
      },
      {
        icon: "star",
        name: "Stars",
        counter: navigationStats?.data?.starsCount ?? 0,
      },
    ];

    return (
      <ul className={classNames(styles.root, className)}>
        {tabs.length &&
          tabs.map((tab) => <NavigationTab tab={tab} key={tab.name} />)}
      </ul>
    );
  }
);
