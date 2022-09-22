import { memo } from 'react';
import { HeatmapDay } from '../heatmap-day/heatmap-day';
import type { GitHubContributions } from '../../../../../../shared/model/github-contributions';

export interface HeatmapWeekProps {
    className?: string;
    week: GitHubContributions['weeks'][0];
}

export const HeatmapWeek = memo<HeatmapWeekProps>(function HeatmapWeek({ className, week }) {
    return (
        <div className={className}>
            {week.map((day, dayIndex) => (
                <HeatmapDay
                    count={day.contributionCount}
                    date={day.date}
                    level={day.contributionLevel}
                    key={dayIndex}
                />
            ))}
        </div>
    );
});
