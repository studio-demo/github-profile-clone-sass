import { memo } from 'react';
import { HeatmapAxisX } from './heatmap-axis-x/heatmap-axis-x';
import { HeatmapAxisY } from './heatmap-axis-y/heatmap-axis-y';
import { HeatmapWeek } from './heatmap-week/heatmap-week';
import styles from './heatmap.module.scss';
import { HeatmapContext } from './heatmapContextProvider';

export interface HeatmapContextProps {
    className?: string;
}

export const HeatmapWithContext = memo<HeatmapContextProps>(function Heatmap({ className = [] }) {
    return (
        <HeatmapContext.Consumer>
            {(weeks) => (
                <div className={`${styles.root} ${className || ''}`}>
                    <HeatmapAxisX className={styles.axisX} weeks={weeks} />

                    <div className={styles.chart}>
                        <HeatmapAxisY className={styles.axisY} />

                        {weeks.length > 0 &&
                            weeks.map((week, weekIndex) => (
                                <HeatmapWeek key={weekIndex} className={styles.week} week={week} />
                            ))}
                    </div>
                </div>
            )}
        </HeatmapContext.Consumer>
    );
});
