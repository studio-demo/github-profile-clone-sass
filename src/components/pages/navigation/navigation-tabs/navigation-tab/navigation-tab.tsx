import classNames from 'classnames';
import { memo } from 'react';
import { Icon } from '../../../../shared/icon/icon';
import type { Icons } from '../../../../shared/icon/icons';
import styles from './navigation-tab.module.scss';

/**
 * Profile navigation tab component.
 */
export interface ProfileTab {
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

export interface NavigationTabProps {
    className?: string;
    tab: ProfileTab;
}

export const NavigationTab = memo<NavigationTabProps>(function NavigationTabs({ className, tab }) {
    return (
        <li className={classNames(styles.root, { [styles.active]: tab.isActive }, styles.wrapper, className)}>
            <Icon className={styles.icon} name={tab.icon} />
            <span>{tab.name}</span>
            {(tab.counter ?? 0) > 0 && <span className={styles.badge}>{tab.counter}</span>}
        </li>
    );
});
