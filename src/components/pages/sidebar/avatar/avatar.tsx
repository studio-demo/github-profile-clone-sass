import classNames from 'classnames';
import { memo } from 'react';
import styles from './avatar.module.scss';
export interface AvatarProps {
    className?: string;
    url?: string;
    name?: string;
    username?: string;
}

export const Avatar = memo<AvatarProps>(function Avatar({ className, url, name, username }) {
    return (
        <div className={classNames(styles.root, className)}>
            <img className={styles.image} src={url} alt={name ?? username} />

            <div className={styles.names}>
                <span className={styles.name}>{name}</span>
                <span className={styles.username}>{username}</span>
            </div>
        </div>
    );
});
