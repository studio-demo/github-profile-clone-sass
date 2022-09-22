import styles from './sidebar-block.module.scss';
import type React from 'react';
import type { ReactNode } from 'react';

export interface SidebarBlockProps {
    className?: string;
    children: ReactNode;
    label: string;
}

export const SidebarBlock: React.FC<SidebarBlockProps> = ({ className, children, label }) => {
    return (
        <div className={`${styles.root} ${className || ''}`}>
            <p className={styles.title}>{label}</p>
            {children}
        </div>
    );
};
