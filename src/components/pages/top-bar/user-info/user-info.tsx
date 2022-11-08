import { memo } from 'react';
import { Icon } from '../../../shared/icon/icon';
import { Link } from '../../../shared/link/link';
import styles from './user-info.module.scss';

export interface UserInfoProps {
    className?: string;
    organization?: string;
    location?: string;
    email?: string;
    url?: string;
    twitter?: string | null;
}

export const UserInfo = memo<UserInfoProps>(function UserInfo({
    className,
    organization,
    location,
    email,
    twitter,
    url,
}) {
    return (
        <ul className={`${styles.root} ${className || ''}`}>
            {organization && (
                <li className={styles.detail}>
                    <Icon className={styles.icon} name="organization" />
                    <span>{organization}</span>
                </li>
            )}
            {location && (
                <li className={styles.detail}>
                    <Icon className={styles.icon} name="location" />
                    {location}
                </li>
            )}
            {email && (
                <li className={styles.detail}>
                    <Icon className={styles.icon} name="mail" />
                    <Link url={`mailto:${email}`} mute>
                        {email}
                    </Link>
                </li>
            )}
            {url && (
                <li className={styles.detail}>
                    <Icon className={styles.icon} name="url" />
                    <Link url={url} mute>
                        {url}
                    </Link>
                </li>
            )}
            {twitter && (
                <li className={styles.detail}>
                    <Icon className={styles.icon} name="twitter" />
                    <Link url={`https://twitter.com/${twitter}`} mute>
                        @{twitter}
                    </Link>
                </li>
            )}
        </ul>
    );
});
