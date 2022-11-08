import type React from 'react';
import { useContext, useMemo } from 'react';
import { useFetcher } from '../shared/hooks/use-fetcher';
import { AppContext } from './app.context';
import styles from './app.module.scss';
import { Header } from './layout/header/header';
import { ProfilePage } from './pages/profile-page';
import { Navigation } from './pages/navigation/navigation';
import { parseUserResponse } from '../shared/model/api-user';
import { parseAPIProjectsResponse } from '../shared/model/api-project';
import { parseContributionsResponse } from '../shared/model/api-contributions';
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
const defaultUserRepos = parseAPIProjectsResponse(response_repositories);
const defaultNavigationStats = { reposCount: 35, starsCount: 14 };
const defaultUserContributions = parseContributionsResponse(response_contributions);

export const App: React.FC<AppProps> = ({ token, username }) => {
    const { apiService } = useContext(AppContext);

    if (token) {
        apiService.setToken(token);
    }

    if (username) {
        apiService.setUsername(username);
    }

    const userInfo = useFetcher(
        useMemo(() => apiService.getUserInfo(), [apiService]),
        defaultUserInfo
    );

    const userRepos = useFetcher(
        useMemo(() => apiService.getUserRepos(), [apiService]),
        defaultUserRepos
    );

    const navigationStats = useFetcher(
        useMemo(() => apiService.getUserStats(), [apiService]),
        defaultNavigationStats
    );

    const userContributions = useFetcher(
        useMemo(() => apiService.getContributions(), [apiService]),
        defaultUserContributions
    );

    return (
        <AppContext.Provider
            value={{
                apiService: apiService,
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
            </div>
        </AppContext.Provider>
    );
};
