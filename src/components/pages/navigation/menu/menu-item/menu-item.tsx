import { memo } from 'react';
import { Icon } from '../../../../shared/icon/icon';
import type { Icons } from '../../../../shared/icon/icons';
import styles from './menu-item.module.scss';

/**
 * Profile navigation tab component.
 */
export interface IMenuItem {
    /** Tab icon */
    icon: Icons;
    /** Tab name */
    name: string;
    /** Shows a counter on the item
     * @optional
     */
    counter?: number;
    /** Marks the current item as selected
     * @optional
     * */
    isActive?: boolean;
}

export interface MenuItemProps {
    className?: string;
    menuItem: IMenuItem;
}

export const MenuItem = memo<MenuItemProps>(function NavigationTabs({ className, menuItem }) {
    return (
        <li
            className={`${styles.root} ${menuItem.isActive ? [styles.active] : ''} ${styles.wrapper} ${
                className || ''
            }`}
        >
            <Icon className={styles.icon} name={menuItem.icon} />
            <span>{menuItem.name}</span>
            {(menuItem.counter ?? 0) > 0 && <span className={styles.badge}>{menuItem.counter}</span>}
        </li>
    );
});
