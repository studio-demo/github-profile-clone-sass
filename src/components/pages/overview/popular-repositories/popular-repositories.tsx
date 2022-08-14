import { memo } from 'react';
import styles from './popular-repositories.module.scss';
import type { GithubRepository } from '../../../../shared/model/github-repository';
import { Repository } from './repository/repository';
import classNames from 'classnames';

export interface NavigationTabsProps {
    className?: string;
    repositories?: GithubRepository[];
}

export const PopularRepositories = memo<NavigationTabsProps>(function PopularRepositories({
    className,
    repositories = [],
}) {
    return (
        <div className={classNames(styles.root, className)}>
            <p className={styles.title}>Popular repositories</p>
            <ul className={styles.list}>
                {repositories.map((repository) => (
                    <Repository
                        className={styles.item}
                        key={repository.name}
                        name={repository.name}
                        url={repository.url}
                        description={repository.description}
                        forks={repository.forks}
                        language={repository.language}
                        stars={repository.stars}
                    />
                ))}
            </ul>
        </div>
    );
});
