import { memo } from 'react';
import styles from './avatar.module.scss';

export interface AvatarProps {
    className?: string;
    url?: string;
    username?: string;
}

export const Avatar = memo<AvatarProps>(function Avatar({ className, url, username }) {
    return (
        <div className={`${styles.root} ${className || ''}`}>
            <img className={styles.image} src={url} alt={username} />
        </div>
    );
});
