import { memo } from 'react';
import { Logo } from '../../shared/logo/logo';
import styles from './header.module.scss';

export interface HeaderProps {
    className?: string;
}

export const Header = memo<HeaderProps>(function Header({ className }) {
    return (
        <header className={`${styles.root} ${className || ''}`}>
            <Logo className={styles.logo} />
        </header>
    );
});
