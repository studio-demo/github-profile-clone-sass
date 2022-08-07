import classNames from "classnames";
import { memo, useState } from "react";
import styles from "./follow.module.scss";

export interface FollowProps {
  className?: string;
}

export const Follow = memo<FollowProps>(function Follow({ className }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const toggleFollowing = () => setIsFollowing(!isFollowing);

  return (
    <button
      className={classNames(styles.root, className)}
      onClick={toggleFollowing}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </button>
  );
});
