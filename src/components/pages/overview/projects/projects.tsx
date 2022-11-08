import { memo } from 'react';
import { Project } from './project/project';
import type { APIProject } from '../../../../shared/model/api-project';
import styles from './projects.module.scss';

export interface NavigationTabsProps {
    className?: string;
    repositories?: APIProject[];
}

export const Projects = memo<NavigationTabsProps>(function Projects({ className, repositories = [] }) {
    return (
        <div className={`${styles.root} ${className || ''}`}>
            <p className={styles.title}>Projects</p>
            <ul className={styles.list}>
                {repositories.map((repository) => (
                    <Project
                        className={styles.item}
                        key={repository.name}
                        name={repository.name}
                        description={repository.description}
                    />
                ))}
            </ul>
        </div>
    );
});
