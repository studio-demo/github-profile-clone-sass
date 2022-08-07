import { memo } from "react";
import classNames from "classnames";
import { GithubLogo } from "../../shared/github-logo/github-logo";
import { Link } from "../../shared/link/link";
import styles from "./footer.module.scss";

export interface FooterProps {
  className?: string;
}

export const Footer = memo<FooterProps>(function Footer({ className }) {
  return (
    <footer className={classNames(styles.root, className)}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <GithubLogo className={styles.logo} />

          <span>© 2022 GitHub, Inc.</span>

          <ul className={styles.navigation}>
            <li>
              <Link url="https://docs.github.com/en/github/site-policy/github-terms-of-service">
                Terms
              </Link>
            </li>
            <li>
              <Link url="https://docs.github.com/en/github/site-policy/github-privacy-statement">
                Privacy
              </Link>
            </li>
            <li>
              <Link url="https://github.com/security">Security</Link>
            </li>
            <li>
              <Link url="https://www.githubstatus.com/">Status</Link>
            </li>
            <li>
              <Link url="https://docs.github.com">Docs</Link>
            </li>
            <li>
              <Link url="https://support.github.com?tags=dotcom-footer">
                Contact GitHub
              </Link>
            </li>
            <li>
              <Link url="https://github.com/pricing">Pricing</Link>
            </li>
            <li>
              <Link url="https://docs.github.com">API</Link>
            </li>
            <li>
              <Link url="https://services.github.com">Training</Link>
            </li>
            <li>
              <Link url="https://github.blog">Blog</Link>
            </li>
            <li>
              <Link url="https://github.com/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
});
