import type React from 'react';
import { useContext, useMemo } from 'react';
import { AppContext } from '../../app.context';
import { Contributions } from './contributions/contributions';
import { Projects } from './projects/projects';
import { Techs } from './techs/techs';
import { htmlIcon } from './techs/icons/html';
import { pythonIcon } from './techs/icons/python';
import { cSharpIcon } from './techs/icons/CSharp';
import { reactIcon } from './techs/icons/react';
import { nodeIcon } from './techs/icons/node';
import { jsIcon } from './techs/icons/js';
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
            <Techs technologies={[pythonIcon, cSharpIcon, htmlIcon, reactIcon, nodeIcon, jsIcon]} />
            {projects.length > 0 && <Projects projects={projects} />}

            <Contributions />
        </div>
    );
};
