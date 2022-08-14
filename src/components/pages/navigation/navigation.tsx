import classNames from 'classnames';
import { memo, useContext } from 'react';
import { AppContext } from '../../app.context';
import { ProfileTab } from './navigation-tabs/navigation-tab/navigation-tab';
import { NavigationTabs } from './navigation-tabs/navigation-tabs';
import { NavigationUserInfo } from './navigation-user-info/navigation-user-info';
import styles from './navigation.module.scss';

export interface NavigationProps {
    className?: string;
}

export const Navigation = memo<NavigationProps>(function Navigation({ className }) {
    const { navigationStats } = useContext(AppContext);

    const tabs: ProfileTab[] = [
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
        <nav className={classNames(styles.root, className)}>
            <NavigationUserInfo className={styles.sidebar} />

            <NavigationTabs className={styles.content} tabs={tabs} />
        </nav>
    );
});
