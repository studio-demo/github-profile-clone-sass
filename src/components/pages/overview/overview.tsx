import type React from 'react';
import { useContext, useMemo } from 'react';
import { AppContext } from '../../app.context';
import { Contributions } from './contributions/contributions';
import { Projects } from './projects/projects';
export interface OverviewProps {
    className?: string;
}

export const Overview: React.FC<OverviewProps> = ({ className }) => {
    const { userRepos } = useContext(AppContext);
    const projects = useMemo(() => userRepos?.data?.slice(0, 6) ?? [], [userRepos]);

    if (userRepos?.isLoading) {
        return <div>Loading...</div>;
    }

    if (userRepos?.hasError) {
        document.title = 'Error';
        const errorMessage =
            typeof userRepos?.error === 'object' && userRepos?.error !== null && 'toString' in userRepos.error
                ? userRepos?.error?.toString()
                : 'Unknown error';

        return <div>{errorMessage}</div>;
    }

    return (
        <div className={className}>
            {projects.length > 0 && <Projects repositories={projects} />}

            <Contributions />
        </div>
    );
};
