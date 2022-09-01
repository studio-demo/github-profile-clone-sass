import { memo, useContext } from 'react';
import { AppContext } from '../../app.context';
import { IMenuItem } from './menu/menu-item/menu-item';
import { NavigationTabs } from './menu/menu';
import { NavigationUserInfo } from './navigation-user-info/navigation-user-info';
import styles from './navigation.module.scss';

export interface NavigationProps {
    className?: string;
}

export const Navigation = memo<NavigationProps>(function Navigation({ className }) {
    const { navigationStats } = useContext(AppContext);

    const tabs: IMenuItem[] = [
        {
            icon: 'overview',
            name: 'Overview',
            isActive: true,
        },
        {
            icon: 'repositories',
            name: 'Repositories',
            counter: navigationStats?.data?.reposCount ?? 0,
        },
        {
            icon: 'project',
            name: 'Projects',
        },
        {
            icon: 'package',
            name: 'Packages',
        },
        {
            icon: 'star',
            name: 'Stars',
            counter: navigationStats?.data?.starsCount ?? 0,
        },
    ];
    return (
        <nav className={`${styles.root} ${className || ''}`}>
            <NavigationUserInfo className={styles.sidebar} />

            <NavigationTabs className={styles.content} menuItems={tabs} />
        </nav>
    );
});
