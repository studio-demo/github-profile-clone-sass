import classNames from "classnames";
import { memo } from "react";
import { Icon } from "../../../shared/icon/icon";
import { Link } from "../../../shared/link/link";
import styles from "./following.module.scss";

export interface FollowingProps {
  className?: string;
  followers?: number;
  following?: number;
}

export const Following = memo<FollowingProps>(function Following({
  className,
  followers,
  following,
}) {
  return (
    <div className={classNames(styles.root, className)}>
      <Link className={styles.entry} url="#" mute>
        <Icon name="followers" />
        <span className={styles.number}>{followers ?? 0}</span> followers
      </Link>
      ·
      <Link className={styles.entry} url="#" mute>
        <span className={styles.number}>{following ?? 0}</span> following
      </Link>
    </div>
  );
});
