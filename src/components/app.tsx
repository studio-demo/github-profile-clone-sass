import type React from 'react';
import { useContext, useMemo } from 'react';
import { useFetcher } from '../shared/hooks/use-fetcher';
import { AppContext } from './app.context';
import styles from './app.module.scss';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { ProfilePage } from './pages/profile-page';
import { Navigation } from './pages/navigation/navigation';
import { parseUserResponse } from '../shared/model/github-user';
import { parseRepositoriesResponse } from '../shared/model/github-repository';
import { parseContributionsResponse } from '../shared/model/github-contributions';
import { response_user } from '../test-toolkit/mocks/github-user';
import { response_repositories } from '../test-toolkit/mocks/github-repositories';
import { response_contributions } from '../test-toolkit/mocks/github-contributions';

export interface AppProps {
    /**
     * Token can be generated at https://github.com/settings/tokens/new
     * The following permissions are required: read:org, read:user, user:email
     */
    token?: string;

    /**
     * Which profile you want to view.
     */
    username?: string;
}

const defaultUserInfo = parseUserResponse(response_user);
const defaultUserRepos = parseRepositoriesResponse(response_repositories);
const defaultNavigationStats = { reposCount: 35, starsCount: 14 };
const defaultUserContributions = parseContributionsResponse(response_contributions);

export const App: React.FC<AppProps> = ({ token, username }) => {
    const { githubService } = useContext(AppContext);

    if (token) {
        githubService.setToken(token);
    }

    if (username) {
        githubService.setUsername(username);
    }

    const userInfo = useFetcher(
        useMemo(() => githubService.getUserInfo(), [githubService]),
        defaultUserInfo
    );

    const userRepos = useFetcher(
        useMemo(() => githubService.getUserRepos(), [githubService]),
        defaultUserRepos
    );

    const navigationStats = useFetcher(
        useMemo(() => githubService.getUserStats(), [githubService]),
        defaultNavigationStats
    );

    const userContributions = useFetcher(
        useMemo(() => githubService.getContributions(), [githubService]),
        defaultUserContributions
    );

    return (
        <AppContext.Provider
            value={{
                githubService,
                userInfo,
                userRepos,
                navigationStats,
                userContributions,
            }}
        >
            <div className={styles.root}>
                <Header />
                <div className={styles.page}>
                    <Navigation />
                    <ProfilePage userInfo={userInfo} />
                </div>
                <Footer />
            </div>
        </AppContext.Provider>
    );
};
