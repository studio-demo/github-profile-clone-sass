import classNames from 'classnames';
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
            className={classNames(styles.root, { [styles.muted]: mute }, { [styles.bolded]: bold }, className)}
            href={url}
        >
            {children}
        </a>
    );
});
