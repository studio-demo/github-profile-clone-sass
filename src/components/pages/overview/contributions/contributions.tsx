import { memo, useContext } from "react";
import { AppContext } from "../../../app.context";
import styles from "./contributions.module.scss";
import { Heatmap } from "./heatmap/heatmap";

export interface ContributionsProps {
  className?: string;
}

export const Contributions = memo<ContributionsProps>(function Contributions({
  className,
}) {
  const { userContributions } = useContext(AppContext);

  const heatmapWeeks = userContributions?.data?.weeks ?? [];

  return (
    <div className={className}>
      <p className={styles.title}>
        {userContributions?.data?.total} contributions in the last year
      </p>
      <div>
        <Heatmap weeks={heatmapWeeks} />
      </div>
    </div>
  );
});
