import classNames from 'classnames';
import { memo } from 'react';
import { HeatmapDay } from '../heatmap-day/heatmap-day';
import styles from './heatmap-legend.module.scss';

export interface HeatmapLegendProps {
    className?: string;
}

export const HeatmapLegend = memo<HeatmapLegendProps>(function HeatmapLegend({ className }) {
    return (
        <div className={classNames(styles.root, className)}>
            <span>Less</span>
            <HeatmapDay className={styles.day} />
            <HeatmapDay className={styles.day} level={{ l1: true }} />
            <HeatmapDay className={styles.day} level={{ l2: true }} />
            <HeatmapDay className={styles.day} level={{ l3: true }} />
            <HeatmapDay className={styles.day} level={{ l4: true }} />
            <span>More</span>
        </div>
    );
});
