import classNames from "classnames";
import { memo } from "react";
import styles from "./heatmap-axis-y.module.scss";

export interface HeatmapAxisYProps {
  className?: string;
}

export const HeatmapAxisY = memo<HeatmapAxisYProps>(function HeatmapAxisY({
  className,
}) {
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.tick}></div>
      <div className={styles.tick}>Mon</div>
      <div className={styles.tick}></div>
      <div className={styles.tick}>Wed</div>
      <div className={styles.tick}></div>
      <div className={styles.tick}>Fri</div>
    </div>
  );
});
