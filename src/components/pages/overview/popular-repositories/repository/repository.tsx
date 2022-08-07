import classNames from "classnames";
import { memo, useMemo } from "react";
import type { GithubRepository } from "../../../../../shared/model/github-repository";
import { Icon } from "../../../../shared/icon/icon";
import { Link } from "../../../../shared/link/link";
import styles from "./repository.module.scss";

export interface RepositoryProps {
  className?: string;
  repository: GithubRepository;
}

export const Repository = memo<RepositoryProps>(function Repository({
  className,
  repository,
}) {
  const language = useMemo(
    () => repository?.language?.toLowerCase() ?? "",
    [repository]
  );
  const languageState = useMemo(
    () => [
      { [styles.css]: language.includes("css") },
      { [styles.html]: language.includes("html") },
      { [styles.js]: language.includes("javascript") },
      { [styles.php]: language.includes("php") },
    ],
    [language]
  );

  return (
    <li className={classNames(styles.root, className)}>
      <div className={styles.header}>
        <Link className={styles.title} url={repository.url} bold>
          {repository.name}
        </Link>
        <span className={styles.type}>Public</span>
      </div>
      <div className={styles.description}>{repository.description}</div>
      <div className={styles.footer}>
        {repository.language && (
          <div className={classNames(styles.language, languageState)}>
            {repository.language}
          </div>
        )}
        {repository.stars > 0 && (
          <div className={styles.stats}>
            <Icon name="star" />
            <span>{repository.stars}</span>
          </div>
        )}
        {repository.forks > 0 && (
          <div className={styles.stats}>
            <Icon name="fork" />
            <span>{repository.forks}</span>
          </div>
        )}
      </div>
    </li>
  );
});
