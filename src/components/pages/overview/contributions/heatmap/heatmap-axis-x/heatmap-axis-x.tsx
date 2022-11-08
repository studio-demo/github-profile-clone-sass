import dateFormat from 'dateformat';
import { memo } from 'react';
import type { ApiContributions } from 'src/shared/model/api-contributions';
import styles from './heatmap-axis-x.module.scss';

export interface HeatmapAxisXProps {
    className?: string;
    weeks: ApiContributions['weeks'];
}

export const HeatmapAxisX = memo<HeatmapAxisXProps>(function HeatmapAxisX({ className, weeks }) {
    const xTicks: string[] = weeks.map((week, index) => {
        const firstDayMonth = dateFormat(week[0]?.date, 'mmm');

        if (index === 0) {
            return firstDayMonth;
        }

        const previousFirstDay = dateFormat(weeks[index - 1]?.[0]?.date, 'mmm');
        const previousLastDay = dateFormat(weeks[index - 1]?.[6]?.date, 'mmm');

        if (firstDayMonth !== previousFirstDay || firstDayMonth !== previousLastDay) {
            return firstDayMonth;
        } else {
            return '';
        }
    });

    return (
        <div className={`${styles.root} ${className || ''}`}>
            {xTicks.map((tick, index) => (
                <div className={styles.tick} key={index}>
                    {tick}
                </div>
            ))}
        </div>
    );
});
