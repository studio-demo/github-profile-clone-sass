import { memo } from 'react';
import { GithubLogo } from '../../shared/github-logo/github-logo';
import styles from './header.module.scss';

export interface HeaderProps {
    className?: string;
}

export const Header = memo<HeaderProps>(function Header({ className }) {
    return (
        <header className={`${styles.root} ${className || ''}`}>
            <GithubLogo className={styles.logo} />
        </header>
    );
});
