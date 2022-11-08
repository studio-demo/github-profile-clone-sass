import type React from 'react';
import { useContext, useMemo } from 'react';
import { AppContext } from '../../app.context';
import { Contributions } from './contributions/contributions';
import { Projects } from './projects/projects';
export interface OverviewProps {
    className?: string;
}

export const Overview: React.FC<OverviewProps> = ({ className }) => {
    const { userProjects } = useContext(AppContext);
    const projects = useMemo(() => userProjects?.data?.slice(0, 6) ?? [], [userProjects]);

    if (userProjects?.isLoading) {
        return <div>Loading...</div>;
    }

    if (userProjects?.hasError) {
        document.title = 'Error';
        const errorMessage =
            typeof userProjects?.error === 'object' && userProjects?.error !== null && 'toString' in userProjects.error
                ? userProjects?.error?.toString()
                : 'Unknown error';

        return <div>{errorMessage}</div>;
    }

    return (
        <div className={className}>
            {projects.length > 0 && <Projects projects={projects} />}

            <Contributions />
        </div>
    );
};
