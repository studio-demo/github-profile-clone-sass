import classNames from 'classnames';
import { memo } from 'react';
import type { GitHubContributions } from '../../../../../shared/model/github-contributions';
import { Link } from '../../../../shared/link/link';
import { HeatmapAxisX } from './heatmap-axis-x/heatmap-axis-x';
import { HeatmapAxisY } from './heatmap-axis-y/heatmap-axis-y';
import { HeatmapLegend } from './heatmap-legend/heatmap-legend';
import { HeatmapWeek } from './heatmap-week/heatmap-week';
import styles from './heatmap.module.scss';

export interface HeatmapProps {
    className?: string;
    weeks?: GitHubContributions['weeks'];
}

export const Heatmap = memo<HeatmapProps>(function Heatmap({ className, weeks = [] }) {
    return (
        <div className={classNames(styles.root, className)}>
            <HeatmapAxisX className={styles.axisX} weeks={weeks} />

            <div className={styles.chart}>
                <HeatmapAxisY className={styles.axisY} />

                {weeks.length > 0 &&
                    weeks.map((week, weekIndex) => <HeatmapWeek key={weekIndex} className={styles.week} week={week} />)}
            </div>
            <div className={styles.footer}>
                <Link
                    className={styles.link}
                    url="https://docs.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile"
                    mute
                >
                    Learn how we count contributions
                </Link>

                <HeatmapLegend />
            </div>

            <div className={classNames(styles.promo, styles.footer)}>
                NEW!
                <Link url="https://skyline.github.com/">View your contribution in 3D, VR and IRL!</Link>
            </div>
        </div>
    );
});
