import type { ContributionLevel } from '../../components/pages/overview/contributions/heatmap/heatmap-day/heatmap-day';

type DayData = { contributionCount: number; date: string };
type WeekData = { contributionDays: DayData[] };

export type ContributionResponse = {
    user: {
        contributionsCollection: {
            contributionCalendar: {
                totalContributions: number;
                weeks: WeekData[];
            };
        };
    };
};

export interface DayContributions {
    contributionCount: number;
    date: string;
    contributionLevel: ContributionLevel;
}

export type Week = DayContributions[];

export interface ApiContributions {
    total: number;
    max: number;
    weeks: Week[];
}

const deriveContributionLevel = (count: number, max: number): ContributionLevel => {
    if (count === 0) {
        return {};
    } else if (count <= max * 0.15) {
        return { l1: true };
    } else if (count <= max * 0.25) {
        return { l2: true };
    } else if (count <= max * 0.35) {
        return { l3: true };
    } else {
        return { l4: true };
    }
};

/**
 *
 * @returns max contribution per day in given period, always >= 0
 */
const getMaxContribution = (weeksData: WeekData[]) =>
    Math.max(
        ...weeksData
            .map(({ contributionDays: week }) =>
                week.filter((day) => day.contributionCount > 0).map(({ contributionCount }) => contributionCount)
            )
            .flat()
    );

export const parseContributionsResponse = (response: ContributionResponse): ApiContributions => {
    const {
        user: {
            contributionsCollection: {
                contributionCalendar: { totalContributions: total, weeks: weeksData },
            },
        },
    } = response;

    const max = getMaxContribution(weeksData);

    const weeks = weeksData.map(({ contributionDays: week }) =>
        week.map((day) => ({
            ...day,
            contributionLevel: deriveContributionLevel(day.contributionCount, max),
        }))
    );

    return { total, max, weeks };
};
