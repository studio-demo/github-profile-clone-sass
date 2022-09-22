import React, { memo } from 'react';
import styles from './link.module.scss';

export interface LinkProps {
    className?: string;
    url: string;
    mute?: boolean;
    bold?: boolean;
    children: React.ReactNode;
}

export const Link = memo<LinkProps>(function Link({ className, url, children, mute, bold }) {
    return (
        <a
            className={`${styles.root} ${mute ? styles.muted : ''} ${bold ? styles.bolded : ''} ${className || ''}`}
            href={url}
        >
            {children}
        </a>
    );
});
