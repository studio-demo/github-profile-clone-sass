import { memo, useReducer, useMemo } from 'react';
import styles from './follow.module.scss';

export interface FollowProps {
    defaultIsFollowing?: boolean;
}

export const Follow = memo<FollowProps>(({ defaultIsFollowing = false }) => {
    const [isFollowing, toggleFollowing] = useReducer((v) => !v, defaultIsFollowing);
    const buttonText = useMemo(() => getButtonText(isFollowing), [isFollowing]);

    return (
        <div className={styles.root}>
            <button className={styles.button} onClick={toggleFollowing}>
                {buttonText}
            </button>
        </div>
    );
});

const getButtonText = (isFollowing: boolean) => (isFollowing ? 'Unfollow' : 'Follow');
