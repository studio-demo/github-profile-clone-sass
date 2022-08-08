import classNames from "classnames";
import { memo, useMemo } from "react";
import type { GithubRepository } from "../../../../../shared/model/github-repository";
import { Icon } from "../../../../shared/icon/icon";
import { Link } from "../../../../shared/link/link";
import { RepositoryLabel } from "./repository-label/repository-label";
import styles from "./repository.module.scss";

export interface RepositoryProps extends GithubRepository {
  className?: string;
}

export const Repository = memo<RepositoryProps>(function Repository({
  className,
  language,
  url,
  name,
  forks,
  stars,
  description,
}) {
  const repoLanguage = useMemo(() => language?.toLowerCase() ?? "", [language]);
  const languageState = useMemo(
    () => [
      { [styles.css]: repoLanguage.includes("css") },
      { [styles.html]: repoLanguage.includes("html") },
      { [styles.js]: repoLanguage.includes("javascript") },
      { [styles.php]: repoLanguage.includes("php") },
    ],
    [repoLanguage]
  );

  return (
    <li className={classNames(styles.root, className)}>
      <div className={styles.header}>
        <Link className={styles.title} url={url} bold>
          {name}
        </Link>
        <RepositoryLabel label="Public" />
      </div>
      <div className={styles.description}>{description}</div>
      <div className={styles.footer}>
        {language && (
          <div className={classNames(styles.language, languageState)}>
            {language}
          </div>
        )}
        {stars > 0 && (
          <div className={styles.stats}>
            <Icon name="star" />
            <span>{stars}</span>
          </div>
        )}
        {forks > 0 && (
          <div className={styles.stats}>
            <Icon name="fork" />
            <span>{forks}</span>
          </div>
        )}
      </div>
    </li>
  );
});
