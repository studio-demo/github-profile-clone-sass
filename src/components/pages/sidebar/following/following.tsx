import classNames from 'classnames';
import { memo } from 'react';
import { Icon } from '../../../shared/icon/icon';
import { Link } from '../../../shared/link/link';
import styles from './following.module.scss';
import Badge from 'react-bootstrap/Badge';

export interface FollowingProps {
    className?: string;
    followers?: number;
    following?: number;
}

export const Following = memo<FollowingProps>(function Following({ className, followers, following }) {
    return (
        <div className={classNames(styles.root, className)}>
            <Badge bg="secondary">
                <Link className={styles.entry} url="#" mute>
                    <Icon name="followers" />
                    <span>{followers ?? 0}</span> followers
                </Link>
            </Badge>
        </div>
    );
});
