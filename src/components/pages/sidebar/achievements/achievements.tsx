import { memo } from 'react';
export interface AchievementsProps {
    className?: string;
}

export const Achievements = memo<AchievementsProps>(function Achievements({ className }) {
    return <div className={className}>achievements</div>;
});
