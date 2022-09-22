import { memo } from 'react';
import styles from './navigation-user-info.module.scss';

export interface NavigationUserInfoProps {
    className?: string;
}

export const NavigationUserInfo = memo<NavigationUserInfoProps>(function NavigationUserInfo({ className }) {
    return <div className={`${styles.root} ${className || ''}`}>NavigationUserInfo</div>;
});
