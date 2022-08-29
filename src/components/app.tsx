import type React from 'react';
import { useContext, useMemo } from 'react';
import { useFetcher } from '../shared/hooks/use-fetcher';
import { AppContext } from './app.context';
import styles from './app.module.scss';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { ProfilePage } from './pages/profile-page';
import { Navigation } from './pages/navigation/navigation';

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

export const App: React.FC<AppProps> = ({ token, username }) => {
    const { githubService } = useContext(AppContext);

    if (token) {
        githubService.setToken(token);
    }

    if (username) {
        githubService.setUsername(username);
    }

    const userInfo = useFetcher(useMemo(() => githubService.getUserInfo(), [githubService]));

    const userRepos = useFetcher(useMemo(() => githubService.getUserRepos(), [githubService]));

    const navigationStats = useFetcher(useMemo(() => githubService.getUserStats(), [githubService]));

    const userContributions = useFetcher(useMemo(() => githubService.getContributions(), [githubService]));

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
