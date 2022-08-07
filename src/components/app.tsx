import type React from "react";
import { useContext, useMemo } from "react";
import classNames from "classnames";
import { ErrorBoundary } from "../shared/error-boundary";
import { useFetcher } from "../shared/hooks/use-fetcher";
import { getUsernameFromQueryParams } from "../shared/utils";
import { AppContext } from "./app.context";
import styles from "./app.module.scss";
import { Footer } from "./layout/footer/footer";
import { Header } from "./layout/header/header";
import { ProfilePage } from "./pages/profile-page";

export interface AppProps {
  className?: string;
  token?: string;
  username?: string;
}

export const App: React.FC<AppProps> = ({
  className,
  username = getUsernameFromQueryParams() ?? "plisovyi",
  token = new URLSearchParams(window.location.search).get("token") ?? "",
}) => {
  const { githubService } = useContext(AppContext);

  githubService.setToken(token);
  githubService.setUsername(username);

  const userInfo = useFetcher(
    useMemo(() => githubService.getUserInfo(), [githubService])
  );

  const userRepos = useFetcher(
    useMemo(() => githubService.getUserRepos(), [githubService])
  );

  const navigationStats = useFetcher(
    useMemo(() => githubService.getUserStats(), [githubService])
  );

  const userContributions = useFetcher(
    useMemo(() => githubService.getContributions(), [githubService])
  );

  return (
    <div className={classNames(styles.root, className)}>
      <Header />

      <div className={styles.page}>
        <AppContext.Provider
          value={{
            githubService,
            userInfo,
            userRepos,
            navigationStats,
            userContributions,
          }}
        >
          <ErrorBoundary>
            <ProfilePage userInfo={userInfo} />
          </ErrorBoundary>
        </AppContext.Provider>
      </div>

      <Footer />
    </div>
  );
};
