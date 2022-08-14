import type { ContributionLevel } from '../../components/pages/overview/contributions/heatmap/heatmap-day/heatmap-day';

type GithubDay = { contributionCount: number; date: string };
type GithubWeek = { contributionDays: GithubDay[] };

export type ContributionResponse = {
    user: {
        contributionsCollection: {
            contributionCalendar: {
                totalContributions: number;
                weeks: GithubWeek[];
            };
        };
    };
};

export interface GitHubContributionsPerDay {
    contributionCount: number;
    date: string;
    contributionLevel: ContributionLevel;
}

export type GitHubContributionsWeek = GitHubContributionsPerDay[];

export interface GitHubContributions {
    total: number;
    max: number;
    weeks: GitHubContributionsWeek[];
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
const getMaxContribution = (gitHubWeeks: GithubWeek[]) =>
    Math.max(
        ...gitHubWeeks
            .map(({ contributionDays: week }) =>
                week.filter((day) => day.contributionCount > 0).map(({ contributionCount }) => contributionCount)
            )
            .flat()
    );

export const parseContributionsResponse = (response: ContributionResponse): GitHubContributions => {
    const {
        user: {
            contributionsCollection: {
                contributionCalendar: { totalContributions: total, weeks: gitHubWeeks },
            },
        },
    } = response;

    const max = getMaxContribution(gitHubWeeks);

    const weeks = gitHubWeeks.map(({ contributionDays: week }) =>
        week.map((day) => ({
            ...day,
            contributionLevel: deriveContributionLevel(day.contributionCount, max),
        }))
    );

    return { total, max, weeks };
};
