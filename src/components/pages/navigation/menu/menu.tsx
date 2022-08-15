import classNames from 'classnames';
import { memo } from 'react';
import { MenuItem, IMenuItem } from './menu-item/menu-item';
import styles from './menu.module.scss';

export interface NavigationTabsProps {
    className?: string;
    menuItems: IMenuItem[];
}

export const NavigationTabs = memo<NavigationTabsProps>(function NavigationTabs({ className, menuItems = [] }) {
    return (
        <ul className={classNames(styles.root, className)}>
            {menuItems.length && menuItems.map((item) => <MenuItem menuItem={item} key={item.name} />)}
        </ul>
    );
});
