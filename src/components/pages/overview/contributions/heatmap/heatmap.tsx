import { memo } from 'react';
import { HeatmapAxisX } from './heatmap-axis-x/heatmap-axis-x';
import { HeatmapAxisY } from './heatmap-axis-y/heatmap-axis-y';
import { HeatmapWeek } from './heatmap-week/heatmap-week';
import styles from './heatmap.module.scss';
import type { ApiContributions } from '../../../../../shared/model/api-contributions';

export interface HeatmapProps {
    className?: string;
    weeks?: ApiContributions['weeks'];
}

export const Heatmap = memo<HeatmapProps>(function Heatmap({ className, weeks = [] }) {
    return (
        <div className={`${styles.root} ${className || ''}`}>
            <HeatmapAxisX className={styles.axisX} weeks={weeks} />

            <div className={styles.chart}>
                <HeatmapAxisY className={styles.axisY} />

                {weeks.length > 0 &&
                    weeks.map((week, weekIndex) => <HeatmapWeek key={weekIndex} className={styles.week} week={week} />)}
            </div>
        </div>
    );
});
