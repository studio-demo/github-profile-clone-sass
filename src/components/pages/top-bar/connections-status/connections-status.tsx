import { memo } from 'react';
import styles from './following.module.scss';

export interface ConnectionsStatusProps {
    className?: string;
    connections?: string;
    year?: number;
}

export const ConnectionsStatus = memo<ConnectionsStatusProps>(function Following({ className, connections, year }) {
    return (
        <div className={`${styles.root} ${className || ''}`}>
            <span className={styles.number}>{connections}</span> connections · Member since {year}
        </div>
    );
});
