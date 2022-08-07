import classNames from "classnames";
import { memo } from "react";
import styles from "./bio.module.scss";

export interface BioProps {
  className?: string;
  bio?: string;
}

export const Bio = memo<BioProps>(function Bio({ className, bio }) {
  return <div className={classNames(styles.root, className)}>{bio}</div>;
});
