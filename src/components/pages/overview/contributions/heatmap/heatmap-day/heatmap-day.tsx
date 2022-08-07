import classNames from "classnames";
import { memo } from "react";
import styles from "./heatmap-day.module.scss";

export type ContributionLevel =
  | { l1: true }
  | { l2: true }
  | { l3: true }
  | { l4: true }
  | Record<string, never>;

export interface HeatmapDayProps {
  className?: string;
  count?: number;
  date?: string;
  level?: ContributionLevel;
}

export const HeatmapDay = memo<HeatmapDayProps>(function HeatmapDay({
  className,
  count = 0,
  date = "",
  level = {},
}) {
  const title =
    count > 0 ? count.toString() : count < 0 ? "" : "No contributions";
  const levelClass = Object.keys(level)[0];

  return (
    <div
      title={title}
      data-contribution-date={date}
      className={classNames(
        styles.root,
        { [styles[levelClass]]: true },
        className
      )}
    ></div>
  );
});
