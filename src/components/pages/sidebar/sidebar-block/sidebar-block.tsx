import classNames from 'classnames';
import type React from 'react';
import type { ReactNode } from 'react';
import styles from './sidebar-block.module.scss';

export interface SidebarBlockProps {
    className?: string;
    children: ReactNode;
    label: string;
}

export const SidebarBlock: React.FC<SidebarBlockProps> = ({ className, children, label }) => {
    return (
        <div className={classNames(styles.root, className)}>
            <p className={styles.title}>{label}</p>
            {children}
        </div>
    );
};
